import { LoginHeader, LoginForm } from '../../molecules';

function RightSide() {
  return (
    <div className="h-full w-full flex flex-col px-8 justify-evenly rounded-xl bg-whiteBg md:px-24 md:rounded-tl-none md:rounded-bl-none ">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default RightSide;
