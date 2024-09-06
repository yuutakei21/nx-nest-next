import TextField, { TextFieldProps } from '@mui/material/TextField';

export type UINumberInputProps = TextFieldProps & {
  size?: string;
};

function UINumberInput(props: UINumberInputProps) {
  return (
    <TextField
      {...props}
      sx={{
        ...props.sx,
        '& input[type=number]::-webkit-outer-spin-button': {
          opacity: 1,
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          opacity: 1,
        },
      }}
      size={props.size || 'small'}
      type="number"
    />
  );
}
export default UINumberInput;
