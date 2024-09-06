/* eslint-disable @typescript-eslint/no-explicit-any */
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  border: 'solid 1px #979797',
  color: '#979797',
  width: '40px',
  height: '40px',
  position: 'absolute',
  right: '8px',
  top: '10px',
  '&:hover': {
    backgroundColor: 'rgb(232, 240, 254)',
  },
};
const UICloseButton = (props: IconButtonProps) => {
  return (
    <IconButton {...props} sx={style} >
      <CloseIcon />
    </IconButton>
  );
};

export default UICloseButton;
