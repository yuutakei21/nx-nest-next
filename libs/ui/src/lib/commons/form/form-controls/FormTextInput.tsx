import TextField, { TextFieldProps } from '@mui/material/TextField';

export type FormTextInputProps = TextFieldProps & {
  size?: string;
};

function FormTextInput(props: FormTextInputProps) {
  return <TextField {...props} size={props.size || 'small'} />;
}
export default FormTextInput;
