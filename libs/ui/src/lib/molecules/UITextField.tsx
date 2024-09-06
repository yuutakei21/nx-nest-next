import TextField, { TextFieldProps } from '@mui/material/TextField';

export type UITextFieldProps = TextFieldProps & {
  size?: string;
};

function UITextField(props: UITextFieldProps) {
  return (
    <TextField
      {...props}
      size={props.size || 'small'}
    />
  );
}
export default UITextField;
