import { reducer as authReducer } from './auth';
import heroDataSlice from './LandingSlice/heroData/heroData.slice';
import profileDataSlice from './LandingSlice/profileData/profileData.slice';
import quoteDataSlice from './LandingSlice/quoteData/quoteData.slice';
import footerDataSlice from './LandingSlice/footerData/footerData.slice';

export default {
  auth: authReducer,
  heroData: heroDataSlice,
  profileData: profileDataSlice,
  quoteData: quoteDataSlice,
  footerData: footerDataSlice,
};
