import React, { useState } from 'react';
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

const FileUploader = ({ items, acceptedFile, onChange }: FileUploaderProps) => {
  const [filename, setFilename] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFilename(files[0].name);
      onChange(files);
    }
  };

  return (
    <div className="flex items-center gap-4">
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
          onChange={event => handleChange(event)}
        />
      </Button>
      <Typography>{filename}</Typography>
    </div>
  );
};

export default FileUploader;
