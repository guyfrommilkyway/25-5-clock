// import packages below

// import components below
import Inputs from '@/components/Inputs';
import Timer from '@/components/Timer';
import Controls from '@/components/Controls';

const Clock = () => {
  return (
    <div className='clock'>
      <div className='clock__content'>
        <h1 className='mb-5 text-center text-uppercase'>25+5 Clock</h1>
        <Inputs />
        <Timer />
        <Controls />
      </div>
    </div>
  );
};

export default Clock;
