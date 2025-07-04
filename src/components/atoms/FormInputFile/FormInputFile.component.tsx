import { Controller, FieldValues } from 'react-hook-form';

import { FileUploader } from '../FileUploader';
import type { FormInputFileProps } from './FormInputFile.types';

const FormInputFile = <T extends FieldValues>({
  items,
  name,
  control,
  rules,
  acceptedFile,
}: FormInputFileProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }) => {
        const { onChange } = field;
        return (
          <FileUploader
            items={items}
            onChange={onChange}
            acceptedFile={acceptedFile}
            inputError={formState?.errors?.[name]?.message as string}
          />
        );
      }}
      rules={rules}
    />
  );
};

export default FormInputFile;
