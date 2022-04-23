import { connect, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { LoginForm } from "../Form/LoginForm";

type LoginPropsType = {
  login: string
  password: string
  rememberMe: boolean
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

  const onSubmit = (res: LoginPropsType) => {
    props.login(res.login, res.password, res.rememberMe, res.captcha);
  }

  return (
    <LoginForm onSubmit={onSubmit} captcha={props.captcha} />
  );
}

export default connect(mapStateToProps, { login })(Login);