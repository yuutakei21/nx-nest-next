import Typography from '@mui/material/Typography';

function FormErrorTypography({ children }: any) {
  return (
    <Typography style={{ color: 'red', paddingLeft: '4px' }}>
      {children}
    </Typography>
  );
}
export default FormErrorTypography;
