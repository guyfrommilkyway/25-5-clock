// import packages below
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import utils below
import { update } from '@/features/clock/clockSlice';

// import helpers below
import { getTimeLeft } from '@/helpers';

const Timer = () => {
  // access store
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const audioRef = useRef();

  const playHandler = useCallback(() => {
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.5;
    audioRef.current.play();
  }, [audioRef.current]);

  // countdown
  useEffect(() => {
    let countdown;

    if (counter.isPlaying) {
      countdown = setInterval(() => {
        const timeLeft = getTimeLeft(counter.endTime);

        dispatch(update({ type: 'SET_TIMER', data: timeLeft }));

        console.log(timeLeft);

        // stop
        if (timeLeft === '00:00') {
          playHandler();

          if (counter.isSessionEnded) {
            dispatch(update({ type: 'BREAK_ENDED' }));
            clearInterval(countdown);
          } else {
            dispatch(update({ type: 'SESSION_ENDED' }));
            clearInterval(countdown);
          }
        }
      }, 1000);
    }

    if (counter.isReset) clearInterval(countdown);

    // clean up function
    return () => clearInterval(countdown);
  }, [counter.isPlaying, counter]);

  return (
    <div className='mb-4 p-4 text-center'>
      <h4 className='text-center' id='timer-label'>
        {!counter.isSessionEnded ? 'SESSION' : 'BREAK'}
      </h4>
      <span className='mx-auto fs-1' id='time-left'>
        {counter.timer}
      </span>
      <audio id='beep' preload='auto' src='/beep.mp3' ref={audioRef}></audio>
    </div>
  );
};

export default Timer;
