import { Checkbox } from '@mui/material';
import type { FormControlLabelProps } from '@mui/material';

import { Title } from '../Title';

import type { styleParamProps } from './Checkbox.types';

const styleConfig = ({
  type,
  items,
  checked,
  onChange,
}: styleParamProps): FormControlLabelProps => {
  switch (type) {
    case 'rememberEmail':
      return {
        className: 'self-start',
        control: (
          <Checkbox
            color="secondary"
            size="small"
            checked={checked}
            onChange={onChange}
          />
        ),
        label: <Title items={items} type="rememberEmail" />,
      };

    default:
      return {
        className: 'self-start',
        control: <Checkbox color="secondary" size="small" />,
        label: <Title items="checkbox" type="rememberEmail" />,
      };
  }
};

export { styleConfig };
