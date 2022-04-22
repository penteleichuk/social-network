import { LoginForm } from "../Form/LoginForm";

type LoginPropsType = {
  login: string
  password: string
  rememberMe: boolean
}

export const Login = () => {

  const onSubmit = (props: LoginPropsType) => {
    console.log(props);
  }

  return (
    <LoginForm onSubmit={onSubmit} />
  );
}
