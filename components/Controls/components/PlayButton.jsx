// import packages below
import Button from 'react-bootstrap/Button';

// import assets below
import { FaPlay, FaStop } from 'react-icons/fa6';

const PlayButton = () => {
  return (
    <Button variant='primary' id='start_stop'>
      <FaPlay />
    </Button>
  );
};

export default PlayButton;
