'use client';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import { useEffect, useRef, useState } from 'react';
import NotiPopper from '../molecules/UINotipopper';

type NotificationButtonProps = {
  notifications: any;
};

export function CMNotificationButton(props: NotificationButtonProps) {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { notifications } = props;
  const [openPopper, setOpenPopper] = useState(false);
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    setItems(notifications);
  }, [notifications]);

  return (
    <Badge
      ref={anchorRef}
      onClick={(e) => setOpenPopper(!openPopper)}
      color="error"
      badgeContent={items?.length || 0}
      sx={{
        marginRight: '2rem',
      }}
    >
      <NotificationsNoneIcon />
      <NotiPopper anchorEl={anchorRef.current} items={items} open={openPopper} onClose={(e) => setOpenPopper(false)} />
    </Badge>
  );
}

export default CMNotificationButton;
