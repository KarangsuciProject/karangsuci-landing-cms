import { Title, Logo } from '../../atoms';

const LoginHeaderComponent = () => {
  return (
    <div>
      <Logo />
      <Title items="Al-Hidayah Karangsuci CMS" type="loginTitle" />
      <Title
        items="Masuk dengan menggunakan akun Al-Hidayah"
        type="loginSubtitle"
      />
    </div>
  );
};

export default LoginHeaderComponent;
