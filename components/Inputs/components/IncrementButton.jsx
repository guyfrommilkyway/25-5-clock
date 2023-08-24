// import packages below
import Button from 'react-bootstrap/Button';

// import assets below
import { FaPlus } from 'react-icons/fa6';

const IncrementButton = (props) => {
  // destructure props
  const { id, onIncrement, disabled } = props;

  return (
    <Button
      variant='primary'
      size='sm'
      id={id}
      onClick={onIncrement}
      disabled={disabled}
    >
      <FaPlus />
    </Button>
  );
};

export default IncrementButton;
