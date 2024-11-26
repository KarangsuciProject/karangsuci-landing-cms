import { Grid2 as Grid } from '@mui/material';

import { Organism } from '../../components';

const LoginPage = () => {
  return (
    <div className="h-[100vh] px-64 py-10 bg-[#e0e0e0f5]">
      <Grid container spacing={0} className="h-full">
        <Grid size={5}>
          <Organism.LeftSide />
        </Grid>
        <Grid size={7}>
          <Organism.RightSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
