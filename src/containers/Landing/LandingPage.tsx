import { Typography } from '@mui/material';

import {
  FooterData,
  HeroData,
  ProfileData,
  QuoteData,
} from '../../components/organism';
import { Title } from '../../components/atoms';

import { styleConfig } from './LandingPage.styles';

const LandingPage = () => {
  return (
    <section className={styleConfig.wrapper}>
      <Title items="Edit Data Landing" type="headerTitle" />
      <Typography variant="body1">
        Ini merupakan tempat untuk mengedit data landing. Silakan lakukan
        perubahan sesuai kebutuhan Anda.
      </Typography>
      <HeroData />
      <ProfileData />
      <QuoteData />
      <FooterData />
    </section>
  );
};

export default LandingPage;
