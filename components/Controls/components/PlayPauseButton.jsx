// import packages below
import Button from 'react-bootstrap/Button';

// import utils below
import { start, pause } from '@/features/clock/clockSlice';

// import assets below
import { FaPlay, FaPause } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

const PlayPauseButton = () => {
  const isPlaying = useSelector((state) => state.counter.isPlaying);
  const dispatch = useDispatch();

  return (
    <Button
      variant={isPlaying ? 'secondary' : 'primary'}
      id='start_stop'
      onClick={() => (isPlaying ? dispatch(pause()) : dispatch(start()))}
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </Button>
  );
};

export default PlayPauseButton;
