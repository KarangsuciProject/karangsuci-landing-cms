import { LoginHeader, LoginForm } from '../../molecules';

function RightSide() {
  return (
    <div className="h-full w-full flex flex-col px-6 justify-evenly rounded-xl bg-whiteBg md:px-16 md:rounded-tl-none md:rounded-bl-none ">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default RightSide;
