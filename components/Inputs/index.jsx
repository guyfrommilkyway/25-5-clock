// import packages below
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

// import components below
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import TimeInput from './components/TimeInput';

// import utils below
import { increment, decrement } from '@/features/clock/clockSlice';

// constants
const BREAK_LENGTH = { type: 'BREAK_LENGTH' };
const SESSION_LENGTH = { type: 'SESSION_LENGTH' };

const Inputs = () => {
  const { isPlaying, sessionLength, breakLength } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  return (
    <div className='w-100 mx-auto mb-4'>
      <Row className='justify-content-between'>
        <Col>
          <Stack className='w-100 mx-auto'>
            <h6 className='mb-3 text-center' id='break-label'>
              Break Length
            </h6>
            <Stack className='mx-auto' direction='horizontal' gap='2'>
              <DecrementButton
                id='break-decrement'
                onDecrement={() => dispatch(decrement(BREAK_LENGTH))}
                disabled={breakLength === 1 || isPlaying}
              />
              <TimeInput id='break-length' time={breakLength} />
              <IncrementButton
                id='break-increment'
                onIncrement={() => dispatch(increment(BREAK_LENGTH))}
                disabled={breakLength === 60 || isPlaying}
              />
            </Stack>
          </Stack>
        </Col>
        <Col>
          <Stack className='w-100 mx-auto'>
            <h6 className='mb-3 text-center' id='session-label'>
              Session Length
            </h6>
            <Stack className='mx-auto' direction='horizontal' gap='2'>
              <DecrementButton
                id='session-decrement'
                onDecrement={() => dispatch(decrement(SESSION_LENGTH))}
                disabled={sessionLength === 1 || isPlaying}
              />
              <TimeInput id='session-length' time={sessionLength} />
              <IncrementButton
                id='session-increment'
                onIncrement={() => dispatch(increment(SESSION_LENGTH))}
                disabled={sessionLength === 60 || isPlaying}
              />
            </Stack>
          </Stack>
        </Col>
      </Row>
    </div>
  );
};

export default Inputs;
