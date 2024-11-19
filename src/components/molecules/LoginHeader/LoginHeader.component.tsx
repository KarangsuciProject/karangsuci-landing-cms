import { Title, Logo } from '../../atoms';

function LoginHeaderComponent() {
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
}

export default LoginHeaderComponent;
