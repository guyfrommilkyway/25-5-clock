// import packages below
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import utils below
import { stop, update } from '@/features/clock/clockSlice';

// import helpers below
import { getEndTime, getTimeLeft } from '@/helpers';

const Timer = () => {
  // access store
  const { isPlaying, isSessionEnded, timer, endTime, breakLength } =
    useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const newEndTime = useMemo(() => {
    if (isSessionEnded) return getEndTime(breakLength);
  }, [isSessionEnded]);

  // countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      // stop
      if (!isPlaying) clearInterval(countdown);

      if (isPlaying) {
        const timeLeft = isSessionEnded
          ? getTimeLeft(newEndTime)
          : getTimeLeft(endTime);

        console.log(`${timeLeft.minutes}:${timeLeft.seconds}`);

        // set state
        dispatch(
          update({
            type: 'SET_TIMER',
            data: `${timeLeft.minutes.toString()}:${timeLeft.seconds.toString()}`,
          })
        );

        if (+timeLeft.minutes <= 0 && +timeLeft.seconds <= 0) {
          if (isSessionEnded) {
            dispatch(update({ type: 'BREAK_ENDED' }));
            dispatch(stop());
          }

          console.log('Session ended.');
          dispatch(update({ type: 'SESSION_ENDED', data: newEndTime }));
        }
      }
    }, 1000);

    // clean up function
    return () => clearInterval(countdown);
  }, [isPlaying, isSessionEnded]);

  return (
    <div className='mb-4 p-4 text-center'>
      <h4 className='text-center' id='timer-label'>
        {!isSessionEnded ? 'SESSION' : 'BREAK'}
      </h4>
      <span className='mx-auto fs-1' id='time-left'>
        {timer}
      </span>
    </div>
  );
};

export default Timer;
