import { Title } from '../../atoms';
import { ProfileForm } from '../../molecules/ProfileForm';

import { styleConfig } from './ProfileData.styles';

const ProfileData = () => {
  return (
    <div className={styleConfig.container}>
      <Title items="Profile Data" type="subHeaderTitle" />
      <ProfileForm />
    </div>
  );
};

export default ProfileData;
