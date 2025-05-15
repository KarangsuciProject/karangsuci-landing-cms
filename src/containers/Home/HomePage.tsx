import { Typography } from '@mui/material';

import { Title } from '../../components/atoms';

import { styleConfig } from './HomePage.styles';

function HomePage() {
  return (
    <section className={styleConfig.homepageContainer}>
      <Title items="Dashboard" type="dashboardTitle" />
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quaerat
        saepe suscipit, eveniet ipsum dolor ullam nihil impedit. Consequatur
        cupiditate repudiandae dolorem doloremque rerum, deleniti optio sequi
        blanditiis odit minus!
      </Typography>
    </section>
  );
}
export default HomePage;
