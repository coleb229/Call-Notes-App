import { Link } from 'react-router-dom';

const FormNav = () => {
  return (
    <div className='w-full h-[5vh]'>
      <ul className='flex justify-around'>
        <li className='pt-2 text-white font-semibold text-lg'>
          <Link to='/just-handoff'>Handoff Form</Link>
        </li>
        <li className='pt-2 text-white font-semibold text-lg'>
          <Link to='/Call-Notes-App'>Full Form</Link>
        </li>
      </ul>
    </div>
  );
};

export default FormNav;
