import { Title } from '../../atoms';
import { QuoteForm } from '../../molecules';

import { styleConfig } from './QuoteData.styles';

const QuoteData = () => {
  return (
    <div className={styleConfig.container}>
      <Title items="Quote Data" type="subHeaderTitle" />
      <QuoteForm />
    </div>
  );
};

export default QuoteData;
