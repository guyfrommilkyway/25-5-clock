// import packages below

// import components below
import Inputs from '@/components/Inputs';
import Timer from '@/components/Timer';
import Controls from '@/components/Controls';

const Clock = () => {
  return (
    <div id='clock'>
      <h1 className='mb-5'>25 + 5 Clock</h1>
      <Inputs />
      <Timer />
      <Controls />
    </div>
  );
};

export default Clock;
