import { reducer as loginReducer } from './auth';
import heroDataSlice from './LandingSlice/heroData.slice';
import profileDataSlice from './LandingSlice/profileData.slice';
import quoteDataSlice from './LandingSlice/quoteData.slice';
import footerDataSlice from './LandingSlice/footerData.slice';

export default {
  auth: loginReducer,
  heroData: heroDataSlice,
  profileData: profileDataSlice,
  quoteData: quoteDataSlice,
  footerData: footerDataSlice,
};
