// import packages below
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

// import components below
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import TimeInput from './components/TimeInput';

const Inputs = () => {
  return (
    <div className='w-100 mx-auto mb-4'>
      <Row className='justify-content-between'>
        <Col>
          <Stack className='w-100 mx-auto'>
            <h5 className='mb-3 text-center' id='break-label'>
              Break Length
            </h5>
            <Stack className='mx-auto' direction='horizontal' gap='2'>
              <DecrementButton id='break-decrement' />
              <TimeInput id='break-length' value='5' />
              <IncrementButton id='break-increment' />
            </Stack>
          </Stack>
        </Col>
        <Col>
          <Stack className='w-100 mx-auto'>
            <h5 className='mb-3 text-center' id='session-label'>
              Session Length
            </h5>
            <Stack className='mx-auto' direction='horizontal' gap='2'>
              <DecrementButton id='session-decrement' />
              <TimeInput id='session-length' value='25' />
              <IncrementButton id='session-increment' />
            </Stack>
          </Stack>
        </Col>
      </Row>
    </div>
  );
};

export default Inputs;
