import { useState } from 'react';
import { Button, styled, Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

import type { FileUploaderProps } from './FileUploader.types';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileUploader = ({
  items,
  acceptedFile,
  onChange,
  ...rest
}: FileUploaderProps) => {
  const [filename, setFilename] = useState<string>('');

  return (
    <div>
      <Button
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        startIcon={<CloudUpload />}
      >
        {items}
        <VisuallyHiddenInput
          type="file"
          accept={acceptedFile}
          // {...rest}
          onChange={event => onChange(event.target.files)}
        />
      </Button>
      <Typography></Typography>
    </div>
  );
};

export default FileUploader;
