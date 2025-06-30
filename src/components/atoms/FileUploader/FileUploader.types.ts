export type FileUploaderProps = {
  items: string;
  acceptedFile: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputError?: string | undefined;
};
