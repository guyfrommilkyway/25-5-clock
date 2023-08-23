const TimeInput = (props) => {
  // destructure props
  const { id, value } = props;

  return (
    <span className='px-2 fs-5' id={id}>
      {value}
    </span>
  );
};

export default TimeInput;
