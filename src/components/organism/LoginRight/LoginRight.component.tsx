import { LoginHeader, LoginForm } from '../../molecules';

function RightSide() {
  return (
    <div className="h-full px-32 py-8 space-y-12 bg-[#EDF2F7] rounded-tr-lg rounded-br-lg shadow-md">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default RightSide;
