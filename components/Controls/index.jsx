// import packages below
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import components below
import PlayButton from './components/PlayButton';
import PauseButton from './components/PauseButton';
import ResetButton from './components/ResetButton';

const Controls = () => {
  return (
    <div className='d-flex gap-2 mx-auto mb-4'>
      <PlayButton />
      <PauseButton />
      <ResetButton />
    </div>
  );
};

export default Controls;
