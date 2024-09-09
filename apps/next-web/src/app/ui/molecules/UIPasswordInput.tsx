import '../../global.css'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useState } from 'react';

export type UIPasswordInputProps = TextFieldProps;

function UIPasswordInput(props: UIPasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
              className="!border-none !bg-transparent !hover:border-none !hover:bg-transparent"
            >
              {showPassword ? (
                <i className="fas fa-eye text-gray-400 text-sm" />
              ) : (
                <i className="fas fa-eye-slash text-gray-400 text-sm" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
export default UIPasswordInput;
