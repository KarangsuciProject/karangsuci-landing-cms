import { Images } from '../../../assets';

const LogoComponent = () => {
  return (
    <img
      src={Images.default.LogoTransparent}
      alt="Karangsuci Logo"
      className="h-[125px] w-[125px] mx-auto"
    />
  );
};

export default LogoComponent;
