/* eslint-disable @typescript-eslint/no-explicit-any */
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

export type UINotiPopperProps = {
  items: any[];
  open: boolean;
  anchorEl: any;
  onClose: (event: any) => void;
};

function UINotiPopper(props: UINotiPopperProps) {
  const { items, open, anchorEl } = props;

  function handleClose(event: MouseEvent | TouchEvent): void {
    props.onClose(event);
  }

  return (
    <Popper
      sx={{
        zIndex: 1000,
        overflow: open ? 'auto' : 'hidden',
        maxHeight: '500px',
      }}
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      placement="bottom-end"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: placement === 'bottom-end' ? 'right top' : 'right bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                sx={{ paddingY: 0 }}
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
              >
                {items.map((item: any, index: number) => {
                  return (
                    <MenuItem
                      key={`noti-${index}`}
                      sx={{
                        minWidth: '266px',
                        borderBottom: '1px solid #D9D9D9',
                      }}
                    >
                      <Link height="24px" href={`/notifications/detail?uid=${item.id}`}>
                        <Typography
                          sx={{
                            textOverflow: 'ellipsis',
                            width: '200px',
                            overflow: 'hidden',
                            display: 'inline-block',
                          }}
                        >
                          {`${dayjs(item.publishDate).format('MM/DD')}  ${item.title}`}
                        </Typography>
                        <ListItemIcon sx={{ position: 'absolute', right: 0 }}>
                          <KeyboardArrowRightOutlinedIcon htmlColor="gray" />
                        </ListItemIcon>
                      </Link>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default UINotiPopper;
