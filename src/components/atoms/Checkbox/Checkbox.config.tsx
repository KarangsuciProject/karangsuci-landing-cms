import { Checkbox } from '@mui/material';

import { Title } from '../Title';

const styleConfig = {
  rememberEmail: {
    className: 'self-start',
    control: <Checkbox size="small" />,
    label: <Title items="Ingat email" type="rememberEmail" />,
  },
};

export { styleConfig };
