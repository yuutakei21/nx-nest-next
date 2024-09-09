import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: DashboardOutlinedIcon,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: TitleOutlinedIcon,
    href: '/utilities/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: ContentCopyOutlinedIcon,
    href: '/utilities/shadow',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: LoginOutlinedIcon,
    href: '/auth/sign-in',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: PersonAddAltOutlinedIcon,
    href: '/auth/sign-up',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: MoodOutlinedIcon,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: CameraOutlinedIcon,
    href: '/sample-page',
  },
];

export default Menuitems;
