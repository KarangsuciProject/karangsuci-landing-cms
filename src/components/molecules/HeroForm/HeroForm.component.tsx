import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Typography } from '@mui/material';

import { useAppDispatch } from '../../../redux/hooks';
import { addHeroData } from '../../../redux/LandingSlice';
import {
  ButtonComponent,
  FormInputComponent,
  InputLabelComponent,
} from '../../atoms';

import { heroFormValues } from './HeroForm.types';
import { styleConfig } from './HeroForm.styles';

const HeroForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      heroTitle: '',
      subHeroTitle: '',
      buttonUrl: '',
      imageUrl: null,
    },
  });

  const dispatch = useAppDispatch();
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const preview = URL.createObjectURL(file);
      setPreviewImage(preview);
    }
  };

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const onSubmitForm = async (data: heroFormValues) => {
    setLoading(true);
    const res = await dispatch(addHeroData(data));
    if (addHeroData.fulfilled.match(res)) {
      setStatusMessage('success');
    } else {
      setStatusMessage('error');
    }
    setLoading(false);
  };

  return (
    <form
      className={styleConfig.formWrapper}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {statusMessage === 'success' && (
        <Alert severity="success">Berhasil menyimpan data</Alert>
      )}
      {statusMessage === 'error' && (
        <Alert severity="error">Gagal menyimpan data</Alert>
      )}
      <div className={styleConfig.inputFieldContainer}>
        <InputLabelComponent type="regular" items="Hero Title" />
        <FormInputComponent
          name="heroTitle"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'regular',
            placeholder: 'Hero Title',
          }}
        />
        <InputLabelComponent type="regular" items="Sub Hero Title" />
        <FormInputComponent
          name="subHeroTitle"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'regular',
            placeholder: 'Sub Hero Title',
          }}
        />
        <InputLabelComponent type="regular" items="Url" />
        <FormInputComponent
          name="buttonUrl"
          control={control}
          rules={{
            required: {
              value: true,
              message: '*Kolom harus diisi',
            },
          }}
          inputProps={{
            inputType: 'regular',
            placeholder: 'Link Url Button',
          }}
        />
        <InputLabelComponent type="regular" items="File Image" />
        <FormInputComponent
          name="imageUrl"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Choose Image File',
            },
            validate: {
              acceptedFormats: (value: unknown) => {
                const fileList = value as FileList;
                const file = fileList?.[0];
                if (!file) return 'Image is required';
                const acceptedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
                return (
                  acceptedTypes.includes(file.type) || 'Invalid file format'
                );
              },
              fileSize: (value: unknown) => {
                const fileList = value as FileList;
                const file = fileList?.[0];
                const maxSize = 1 * 1024 * 1024;
                return file.size <= maxSize || 'File size must be under 1MB';
              },
            },
          }}
          inputProps={{
            type: 'file',
            accept: 'image/png, image/jpeg, image/jpg',
            onChange: handleImageChange,
          }}
        />
      </div>
      {previewImage && (
        <div className={styleConfig.previewImageContainer}>
          <Typography variant="h5">Image Preview</Typography>
          <img
            src={previewImage}
            alt="Preview"
            className="object-contain max-h-[600px] rounded-3xl"
          />
        </div>
      )}
      <ButtonComponent
        items={loading ? 'Menyimpan..' : 'Simpan'}
        type="regular"
      />
    </form>
  );
};

export default HeroForm;
