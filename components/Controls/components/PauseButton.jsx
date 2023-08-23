// import packages below
import Button from 'react-bootstrap/Button';

// import assets below
import { FaPause } from 'react-icons/fa6';

const PauseButton = () => {
  return (
    <Button variant='secondary'>
      <FaPause />
    </Button>
  );
};

export default PauseButton;
