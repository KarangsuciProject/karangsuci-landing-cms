export type FileUploaderProps = {
  items: string;
  acceptedFile: string;
  onChange: (event: FileList) => void;
  inputError?: string | undefined;
};
