const Controls = (props) => {
  return (
    <div className='w-full flex justify-around'>
      <button className='rounded' onClick={props.reset}>
        Reset
      </button>
      <button className='rounded' onClick={props.add}>
        Add
      </button>
    </div>
  );
};

export default Controls;
