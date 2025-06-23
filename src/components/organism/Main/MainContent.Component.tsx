import { Box, Toolbar } from '@mui/material';
import { MainContentProps } from './MainContent.types';
import StyledMain from './MainContent.styled';

const MainContent = ({ open, children }: MainContentProps) => {
  return (
    <Box className="w-screen">
      <StyledMain open={open}>
        <Toolbar />
        {children}
      </StyledMain>
    </Box>
  );
};

export default MainContent;
