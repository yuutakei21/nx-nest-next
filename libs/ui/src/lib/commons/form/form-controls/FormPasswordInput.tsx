import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';


export type FormPasswordInputProps = TextFieldProps & {
  size?: string;
};

function FormPasswordInput(props: FormPasswordInputProps) {
  const [togglePasswordHide, setToogle] = useState(false);

  return (
    <TextField
      {...props}
      sx={{
        fontSize: '16px',
        width: '100%',
        lineHeight: '150%',
        '.MuiFormHelperText-root': {
          marginX: 0,
          color: '#EA5267',
        },
      }}
      size={props.size || 'small'}
      type={togglePasswordHide ? 'text' : 'password'}
      InputProps={{

        // startAdornment: (
        //   <InputAdornment position="start">
        //     <LockIcon />
        //   </InputAdornment>
        // ),

        
        endAdornment: (
          <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
            {togglePasswordHide ? (
              <VisibilityOutlined onClick={(e) => setToogle(false)} />
            ) : (
              <VisibilityOff onClick={(e) => setToogle(true)} />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
}
export default FormPasswordInput;
