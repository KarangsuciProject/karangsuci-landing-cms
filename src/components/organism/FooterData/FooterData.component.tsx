import { Title } from '../../atoms';
import { FooterForm } from '../../molecules';

import { styleConfig } from './FooterData.styles';

const FooterData = () => {
  return (
    <div className={styleConfig.container}>
      <Title items="Footer Data" type="subHeaderTitle" />
      <FooterForm />
    </div>
  );
};

export default FooterData;
