const Timer = () => {
  return (
    <div className='mb-4 p-4 text-center border rounded'>
      <h4 className='text-center' id='timer-label'>
        Session
      </h4>
      <span className='mx-auto fs-1' id='time-left'>
        25:00
      </span>
    </div>
  );
};

export default Timer;
