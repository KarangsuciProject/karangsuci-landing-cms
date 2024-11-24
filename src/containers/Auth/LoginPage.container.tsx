import { Grid2 as Grid } from '@mui/material';

import { LeftSide, RightSide } from '../../components';

const LoginPage = () => {
  return (
    <div className="h-[100vh] px-64 py-10 bg-[#e0e0e0f5]">
      <Grid container spacing={0} className="h-full">
        <Grid size={5}>
          <LeftSide />
        </Grid>
        <Grid size={7}>
          <RightSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
