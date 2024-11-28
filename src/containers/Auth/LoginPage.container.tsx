import { Organism } from '../../components';

const LoginPage = () => {
  return (
    <div className="h-[100vh] flex px-8 xl:px-72 py-12 md:py-8 bg-semiWhiteBg">
      <Organism.LeftSide />
      <Organism.RightSide />
    </div>
  );
};

export default LoginPage;
