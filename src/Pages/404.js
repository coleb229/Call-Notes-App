import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='w-[80%] h-[95vh] mx-auto bg-white rounded-lg'>
      <h1 className='pt-24 text-2xl font-bold'>Uh oh!</h1>
      <h2 className='pt-5 text-xl font-semibold'>Route not found</h2>
      <p className='pt-10'>Please return to one of the following forms:</p>
      <ul className='pt-4'>
        <li>
          <Link className='hover:text-slate-300' to='/just-handoff'>
            Handoff
          </Link>
        </li>
        <li>
          <Link className='hover:text-slate-300' to='/Call-Notes-App'>
            Ticket/Handoff
          </Link>
        </li>
        <li>
          <Link className='hover:text-slate-300' to='/rekey'>
            Rekey
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
