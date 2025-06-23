import { useForm } from 'react-hook-form';

import { styleConfig } from './VisiContentForm.config';

import { FormInputComponent, ButtonComponent, Title } from '../../atoms';

const VisiContentForm = () => {
  const { control } = useForm({
    defaultValues: {
      visi1: '',
      visi2: '',
      visi3: '',
    },
  });

  return (
    <form className={styleConfig.formWrapper}>
      <Title items="Visi" type="formHeader" />
      <FormInputComponent
        name="visi1"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Kolom harus diisi',
          },
        }}
        inputProps={{}}
      />
      <FormInputComponent
        name="visi2"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Kolom harus diisi',
          },
        }}
        inputProps={{}}
      />
      <FormInputComponent
        name="visi3"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Kolom harus diisi',
          },
        }}
        inputProps={{}}
      />
      <ButtonComponent items="Simpan" type="regular" />
    </form>
  );
};

export default VisiContentForm;
