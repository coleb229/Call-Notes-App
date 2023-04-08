import { useState } from 'react';
import Controls from './Controls';
import Output from './Output';

const Rekey = () => {
  const [rekeyState, setRekeyState] = useState({
    ref: '',
    date: '',
    auth: '',
    four: '',
    amount: '',
    tip: '',
  });

  return (
    <div className='h-[95vh]'>
      <div className='py-auto'>
        <Output formData={rekeyState} />
        <RekeyForm formState={rekeyState} updateFormState={setRekeyState} />
      </div>
    </div>
  );
};

const RekeyForm = (props) => {
  const formState = Object.assign({}, props.formState);

  const reset = () => {
    window.location.reload();
  };

  return (
    <div className='border-2 w-1/3 mx-auto p-10 drop-shadow-sm rounded-b-lg bg-gray-200'>
      <form className=''>
        <div className='block pb-4 flex justify-between w-[55%] mx-auto'>
          <label className='text-right font-semibold pr-5' htmlFor='ref'>
            Ref#:
          </label>
          <input
            type='text'
            required
            value={formState.ref}
            onChange={(e) => {
              formState.ref = e.target.value;
              props.updateFormState(formState);
            }}
            id='ref'
            className='border-black'
          />
        </div>

        <div className='block pb-4 flex justify-between w-[55%] mx-auto'>
          <label className='text-right font-semibold pr-5' htmlFor='date'>
            Date:
          </label>
          <input
            type='text'
            required
            value={formState.date}
            onChange={(e) => {
              formState.date = e.target.value;
              props.updateFormState(formState);
            }}
            id='date'
            className='border-black'
          />
        </div>

        <div className='block pb-4 flex justify-between w-[55%] mx-auto'>
          <label className='text-right font-semibold pr-5' htmlFor='auth'>
            Auth Code:
          </label>
          <input
            type='text'
            required
            value={formState.auth}
            onChange={(e) => {
              formState.auth = e.target.value;
              props.updateFormState(formState);
            }}
            id='auth'
            className='border-black'
          />
        </div>

        <div className='block pb-4 flex justify-between w-[55%] mx-auto'>
          <label className='text-right font-semibold pr-5' htmlFor='four'>
            Last 4:
          </label>
          <input
            type='text'
            required
            value={formState.four}
            onChange={(e) => {
              formState.four = e.target.value;
              props.updateFormState(formState);
            }}
            id='four'
            className='border-black'
          />
        </div>

        <div className='block pb-4 flex justify-between w-[55%] mx-auto'>
          <label className='text-right font-semibold pr-5' htmlFor='amount'>
            Amount:
          </label>
          <input
            type='text'
            required
            value={formState.amount}
            onChange={(e) => {
              formState.amount = e.target.value;
              props.updateFormState(formState);
            }}
            id='amount'
            className='border-black'
          />
        </div>

        <div className='block pb-4 flex justify-between w-[55%] mx-auto'>
          <label className='text-right font-semibold pr-5' htmlFor='tip'>
            Tip:
          </label>
          <input
            type='text'
            required
            value={formState.tip}
            onChange={(e) => {
              formState.tip = e.target.value;
              props.updateFormState(formState);
            }}
            id='tip'
            className='border-black'
          />
        </div>
      </form>
      <Controls reset={reset} add={props.updateList} />
    </div>
  );
};

export default Rekey;
