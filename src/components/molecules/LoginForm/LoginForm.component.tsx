import {
  InputComponent,
  ButtonComponent,
  CheckboxComponent,
  InputLabelComponent,
} from '../../atoms';

const LoginFormComponent = () => {
  return (
    <form className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-1">
        <InputLabelComponent type="email" items="Email" />
        <InputComponent type="email" />
      </div>
      <div className="flex flex-col space-y-1">
        <InputLabelComponent type="password" items="Password" />
        <InputComponent type="password" />
        <CheckboxComponent items="Ingat Email" type="rememberEmail" />
      </div>
      <ButtonComponent items="Masuk" type="loginBtn" />
    </form>
  );
};

export default LoginFormComponent;
