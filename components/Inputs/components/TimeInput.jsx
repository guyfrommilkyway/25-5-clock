const TimeInput = (props) => {
  // destructure props
  const { id, time } = props;

  return (
    <span className='px-2 fs-5' id={id}>
      {time}
    </span>
  );
};

export default TimeInput;
