import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import AppsIcon from '@mui/icons-material/Apps';
import FeedIcon from '@mui/icons-material/Feed';

const Navigation = [
  {
    segment: 'dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: '#',
  },
  {
    segment: 'content',
    name: 'Content',
    icon: <AutoAwesomeMotionIcon />,
    children: [
      {
        segment: 'Landing',
        name: 'Landing',
        icon: <DesktopWindowsIcon />,
        path: '#',
      },
      {
        segment: 'visi&misi',
        name: 'Visi & Misi',
        icon: <FlagCircleIcon />,
        path: '#',
      },
      {
        segment: 'lembaga',
        name: 'Lembaga',
        icon: <WebStoriesIcon />,
        path: '#',
      },
      {
        segment: 'program',
        name: 'Program',
        icon: <AppsIcon />,
        path: '#',
      },
      {
        segment: 'berita',
        name: 'Berita',
        icon: <FeedIcon />,
        path: '#',
      },
    ],
  },
  {
    segment: 'files',
    name: 'Files',
    icon: <PermMediaIcon />,
    path: '#',
  },
];

export { Navigation };
