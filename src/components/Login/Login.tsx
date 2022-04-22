import { LoginForm } from "../Form/LoginForm";

export const Login = () => {

  const onSubmit = (props: any) => {
    console.log(props);
  }

  return (
    <LoginForm onSubmit={onSubmit} />
  );
}
