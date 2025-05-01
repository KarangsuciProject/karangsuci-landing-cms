import { Images } from '../../../assets';

function LoginLeftComponent() {
  return (
    <div className="hidden md:block w-full basis-[48rem] p-2 pr-0 rounded-tl-xl rounded-bl-xl bg-whiteBg">
      <div className="h-full rounded-lg bg-darkGreen">
        <div
          style={{
            backgroundImage: `url(${Images.default.Background})`,
            opacity: 0.1,
          }}
          className="h-full w-full rounded-lg bg-cover"
        />
      </div>
    </div>
  );
}

export default LoginLeftComponent;
