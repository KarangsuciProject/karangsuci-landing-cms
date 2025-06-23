import { styled } from '@mui/material';

const StyledMain = styled('main', {
  shouldForwardProp: prop => prop !== 'open',
})<{ open: boolean }>(({ theme }) => ({
  flexGrow: 1,
  paddingBlock: theme.spacing(3),
  paddingInline: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingInline: theme.spacing(3),
  },
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default StyledMain;
