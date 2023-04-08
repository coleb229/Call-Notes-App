import { Link } from 'react-router-dom';

const FormNav = () => {
  return (
    <div className='w-full h-[5vh]'>
      <ul className='flex justify-around'>
        <li className='pt-2 text-white font-semibold text-lg hover:text-slate-300'>
          <Link to='/just-handoff'>Handoff Template</Link>
        </li>
        <li className='pt-2 text-white font-semibold text-lg hover:text-slate-300'>
          <Link to='/Call-Notes-App'>Full Template</Link>
        </li>
        <li className='pt-2 text-white font-semibold text-lg hover:text-slate-300'>
          <Link to='/rekey'>Rekey Template</Link>
        </li>
      </ul>
    </div>
  );
};

export default FormNav;
