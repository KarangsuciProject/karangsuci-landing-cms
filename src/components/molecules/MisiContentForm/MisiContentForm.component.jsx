import { useForm } from 'react-hook-form';

import { styleConfig } from './MisiContentForm.config';

import { FormInputComponent, ButtonComponent, Title } from '../../atoms';
import { store } from '../../../redux';

const MisiContentForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      misi1: '',
      misi2: '',
      misi3: '',
    },
  });

  return (
    <form className={styleConfig.formWrapper}>
      <Title items="Misi" type="formHeader" />
      <FormInputComponent
        name="misi1"
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
        name="misi2"
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
        name="misi3"
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

export default MisiContentForm;
