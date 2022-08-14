import { FormikValues } from "formik";
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

const Login = (props: (mapStateToPropsType & mapDispatchToPropsType)) => {
  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return <LoginForm onSubmit={props.login} captcha={props.captcha} />
}

type mapDispatchToPropsType = {
  login: (values: LoginPropsType, actions: FormikValues) => void
}

const mapDispatchToProps = (): mapDispatchToPropsType => {
  return {
    login
  }
}

type mapStateToPropsType = {
  isAuth: boolean
  captcha: string | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);