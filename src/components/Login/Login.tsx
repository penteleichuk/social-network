import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { LoginForm } from "../Form/LoginForm";

export type LoginPropsType = {
  login: string
  password: string
  remember: boolean
  captcha: string
}

const mapStateToProps = (state: AppStateType): { isAuth: boolean, captcha: string | null } => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
  }
}

const Login = (props: any) => {
  if (props.isAuth) return <Navigate to={'/profile'} />

  const onSubmit = (values: LoginPropsType, actions: any) => {
    props.login({ ...values }, actions);
  }

  return (
    <LoginForm onSubmit={onSubmit} captcha={props.captcha} />
  );
}

export default connect(mapStateToProps, { login })(Login);