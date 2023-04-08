const Output = (props) => {
  const { ref, date, auth, four, amount, tip } = props.formData;

  return (
    <div className='bg-white w-1/3 text-left pl-10 py-10 rounded-t-lg mx-auto'>
      <p>{'Ref#: ' + ref}</p>
      <p>{'Date: ' + date}</p>
      <p>{'Auth: ' + auth}</p>
      <p>{'Last 4: ' + four}</p>
      <p>{'Amount: ' + amount}</p>
      <p>{'Tip: ' + tip}</p>
    </div>
  );
};

export default Output;
