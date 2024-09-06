import Delete from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

export interface FileListItemProps {
  name: string;
  onDelete?: () => void;
  hideIcon?: boolean;
}

const FileListItem = ({ name, hideIcon, onDelete }: FileListItemProps) => (
  <Chip
    color="primary"
    label={name}
    deleteIcon={hideIcon === true ? <></> : <Delete />}
    variant="outlined"
    sx={{ maxWidth: 200, border: 'none', textDecoration: 'underline' }}
    onDelete={onDelete}
  />
);

export interface FileUploadProps extends Omit<DropzoneOptions, 'onDrop' | 'onDropAccepted'> {
  value: File[] | undefined;
  multiple?: boolean;
  sx?: any;
  typographyProps?: TypographyProps;
  buttonProps?: Omit<ButtonProps, 'onClick'>;
  title?: string;
  buttonText?: string;
  guideText?: string;
  accept?: any;
  error?: boolean | undefined;
  selectedFileName?: string[] | undefined;
  onChange: (files: File[]) => void;
}

const FileUpload = ({
  value,
  onChange,
  sx,
  title,
  buttonText,
  typographyProps,
  buttonProps,
  disabled,
  maxSize,
  multiple,
  guideText,
  accept,
  error,
  selectedFileName,
  ...options
}: FileUploadProps) => {
  const { fileRejections, getRootProps, getInputProps, open } = useDropzone({
    ...options,
    disabled,
    accept,
    maxSize,
    onDropAccepted: onChange,
    noClick: true,
    noKeyboard: true,
    multiple: multiple,
  });

  title = title ? title : 'ここにファイルをドラックアンドドロップ または';
  buttonText = buttonText ? buttonText : '+ ファイルをアップロード';
  const guideTextstr = guideText ? guideText : '履歴書（pdf形式）、職務経歴書（pdf形式）をアップロードしてください。';

  const isFileTooLarge = maxSize !== undefined && fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

  const remove = (index: number) => {
    console.log(index);
    if (value && value.length > 0) {
      const newList = [...value];
      newList.splice(index, 1);
      onChange(newList);
    }
  };

  const fileListItems = value?.map((file, i) => (
    <FileListItem key={`file-item-${i}`} name={file.name} onDelete={() => remove(i)} />
  ));

  const [selectedListFileNames, setSelectedListFileNames] = useState<any>([]);

  useEffect(() => {
    if (selectedFileName) {
      // console.log(selectedFileName)
      const listItem = selectedFileName?.map((name, i) => (
        <FileListItem key={name} name={name} onDelete={() => remove(i)} hideIcon />
      ));
      setSelectedListFileNames(listItem);
    }
  }, [selectedFileName]);

  return (
    <Box className="file-upload-wrapper">
      <Box
        {...getRootProps()}
        sx={{
          border: '1px dashed',
          borderRadius: 1,
          borderColor: error ? 'rgb(255, 23, 68)' : 'rgba(0, 0, 0, 0.23)',
          paddingY: 3,
          paddingX: 1,
          '&:hover': {
            borderColor: disabled ? undefined : 'text.primary',
          },
          '&:focus-within': {
            borderColor: 'primary.main',
            borderWidth: 2,
          },
          ...sx,
        }}
      >
        <FormControl
          error={error || isFileTooLarge}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input {...getInputProps()} accept={accept} />
          <Typography variant="caption" textAlign="center" sx={{ paddingY: 1, fontSize: '14px' }} {...typographyProps}>
            ここにファイルをドラックアンドドロップ
            <br />
            または
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={open}
            disabled={disabled}
            sx={{
              height: 30,
              fontSize: 14,
            }}
            {...buttonProps}
          >
            + ファイルをアップロード
          </Button>
          <FormHelperText> {fileRejections[0]?.errors[0]?.message} </FormHelperText>
        </FormControl>
      </Box>
      <Typography marginY="12px" sx={{ fontSize: '14px', fontWeight: 400 }}>
        {guideTextstr}
      </Typography>
      <Box
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          p: 0.5,
          m: 0,
        }}
      >
        <Typography sx={{ fontSize: '10px', fontWeight: 400 }}>選択中のファイル</Typography>
        {value && value.length > 0 && fileListItems}
        {!value && selectedListFileNames}
      </Box>
    </Box>
  );
};

export default FileUpload;
