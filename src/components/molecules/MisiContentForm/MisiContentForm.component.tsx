import { SubmitHandler, useForm } from 'react-hook-form';

import {
  FormInputComponent,
  FormInputFile,
  ButtonComponent,
  Title,
} from '../../atoms';

import { IFormInput } from './MisiContentForm.types';
import { styleConfig } from './MisiContentForm.config';

const MisiContentForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      missionText1: '',
      missionIcon1: '',
      missionText2: '',
      missionIcon2: '',
      missionText3: '',
      missionIcon3: '',
    },
  });

  const onSubmitForm: SubmitHandler<IFormInput> = async data => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={styleConfig.formWrapper}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <Title items="Misi" type="formHeader" />
      <div className={styleConfig.inputWrapper}>
        <FormInputComponent
          name="missionText1"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Kolom harus diisi',
            },
          }}
          inputProps={{
            fullWidth: true,
            multiline: true,
            size: 'small',
          }}
        />
        <FormInputFile
          items="Unggah Icon"
          name="missionIcon1"
          control={control}
          acceptedFile="image/png, image/jpg, image/jpeg"
        />
      </div>
      <div className={styleConfig.inputWrapper}>
        <FormInputComponent
          name="missionText2"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Kolom harus diisi',
            },
          }}
          inputProps={{
            fullWidth: true,
            multiline: true,
            size: 'small',
          }}
        />
        <FormInputFile
          items="Unggah Icon"
          name="missionIcon2"
          control={control}
          acceptedFile="image/png, image/jpg, image/jpeg"
        />
      </div>
      <div className={styleConfig.inputWrapper}>
        <FormInputComponent
          name="missionText3"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Kolom harus diisi',
            },
          }}
          inputProps={{
            fullWidth: true,
            multiline: true,
            size: 'small',
          }}
        />
        <FormInputFile
          items="Unggah Icon"
          name="missionIcon3"
          control={control}
          acceptedFile="image/png, image/jpg, image/jpeg"
        />
      </div>
      <ButtonComponent items="Simpan" type="regular" />
    </form>
  );
};

export default MisiContentForm;
