import { Title } from '../../atoms';
import { HeroForm } from '../../molecules';

import { styleConfig } from './HeroData.styles';

const HeroData = () => {
  return (
    <div className={styleConfig.container}>
      <Title items="Hero Data" type="subHeaderTitle" />
      <HeroForm />
    </div>
  );
};

export default HeroData;
