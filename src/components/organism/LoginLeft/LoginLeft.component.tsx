import { Images } from '../../../assets';

function LoginLeftComponent() {
  return (
    <div className="h-full pt-2 pl-2 pb-2 rounded-tl-xl rounded-bl-xl shadow-md bg-[#EDF2F7]">
      <div className="h-full rounded-xl bg-[#276749]">
        <div
          style={{
            backgroundImage: `url(${Images.default.Background})`,
            opacity: 0.1,
          }}
          className="h-full w-full rounded-xl bg-cover"
        />
      </div>
    </div>
  );
}

export default LoginLeftComponent;
