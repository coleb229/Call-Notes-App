const Output = (props) => {
  return (
    <div className='w-[95%] mx-auto text-left py-5 pl-10 bg-white'>
      <div id='callerInfo'>
        <h2 className='font-semibold'>Caller Name:</h2>
        <p className='text-white'>{props.name}</p>
      </div>
    </div>
  );
};

export default Output;
