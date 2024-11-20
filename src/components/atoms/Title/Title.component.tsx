import { styleConfig } from './Title.config';
import { Props } from './Title.types';

const TitleComponent = ({ items, type = 'regular' }: Props) => {
  return <h1 className={styleConfig[type]}>{items}</h1>;
};

export default TitleComponent;
