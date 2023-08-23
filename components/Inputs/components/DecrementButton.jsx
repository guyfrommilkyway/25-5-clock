// import packages below
import Button from 'react-bootstrap/Button';

// import assets below
import { FaMinus } from 'react-icons/fa6';

const DecrementButton = (props) => {
  // destructure props
  const { id } = props;

  return (
    <Button variant='danger' size='sm' id={id}>
      <FaMinus />
    </Button>
  );
};

export default DecrementButton;
