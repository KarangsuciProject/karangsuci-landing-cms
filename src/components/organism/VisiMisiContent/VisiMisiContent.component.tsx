import { styleConfig } from './VisiMisiContent.config';

import { VisiContentForm, MisiContentForm } from '../../molecules';

const VisiMisiContent = () => {
  return (
    <div className={styleConfig.container}>
      <div className={styleConfig.formContainer}>
        <VisiContentForm />
        <MisiContentForm />
      </div>
    </div>
  );
};

export default VisiMisiContent;
