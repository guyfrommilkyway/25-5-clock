// import packages below
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

// import utils below
import { stop } from '@/features/clock/clockSlice';

// import assets below
import { FaArrowRotateLeft } from 'react-icons/fa6';

const ResetButton = () => {
  const dispatch = useDispatch();

  return (
    <Button variant='danger' id='reset' onClick={() => dispatch(stop())}>
      <FaArrowRotateLeft />
    </Button>
  );
};

export default ResetButton;
