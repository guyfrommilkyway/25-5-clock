// import packages below
import Button from 'react-bootstrap/Button';

// import assets below
import { FaArrowRotateLeft } from 'react-icons/fa6';

const ResetButton = () => {
  return (
    <Button variant='danger' id='reset'>
      <FaArrowRotateLeft />
    </Button>
  );
};

export default ResetButton;
