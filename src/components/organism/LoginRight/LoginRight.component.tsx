import { LoginHeader, LoginForm } from '../../molecules';

function RightSide() {
  return (
    <div className="h-full w-full flex flex-col justify-around md:justify-center sm:space-y-12 px-8 md:px-24 rounded-xl md:rounded-tl-none md:rounded-bl-none bg-whiteBg">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default RightSide;
