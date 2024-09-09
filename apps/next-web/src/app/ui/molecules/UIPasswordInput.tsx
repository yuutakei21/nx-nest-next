import '../../global.css';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

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
                <VisibilityOutlinedIcon width={20} sx={{ color: '#9ca3af' }} />
              ) : (
                <VisibilityOffOutlinedIcon
                  width={20}
                  sx={{ color: '#9ca3af' }}
                />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
export default UIPasswordInput;
