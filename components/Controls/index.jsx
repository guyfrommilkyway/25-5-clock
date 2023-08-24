// import components below
import PlayPauseButton from './components/PlayPauseButton';
import ResetButton from './components/ResetButton';

const Controls = () => {
  return (
    <div className='d-flex justify-content-center gap-2 mb-4'>
      <PlayPauseButton />
      <ResetButton />
    </div>
  );
};

export default Controls;
