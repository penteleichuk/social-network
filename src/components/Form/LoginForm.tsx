
import { Field, Form, Formik, FormikValues } from 'formik'
import { LoginPropsType } from '../Login/Login';
import * as yup from 'yup';
import style from './Form.module.css'

type LoginFormTypeProps = {
	onSubmit: (values: LoginPropsType, actions: FormikValues) => void;
	captcha: string | null
}

const validationSchema = yup.object({
	login: yup.string().typeError('Invalid login').required('Required'),
	password: yup.string().min(4, "Must be longer than 2 characters").max(20).required("Required"),
	remember: yup.boolean(),
	captcha: yup.string(),
});

const formikInitail = { login: '', password: '', remember: false, captcha: '', error: '' };

export const LoginForm = (props: LoginFormTypeProps) => {
	const { onSubmit, captcha } = props;

	return (
		<Formik initialValues={formikInitail} validateOnBlur onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ values, errors, touched, handleChange, handleBlur, isValid, dirty, status }) => (

				<Form className={style.form}>
					<h1 className={style.formTitle}>Auth</h1>
					<p className={style.formDescription}>You are welcome!</p>
					<div className={style.formWrapper}>
						<label htmlFor="login" className={style.formLabel}>
							<span className={style.formLabelText}>Login: {touched.login && errors.login && <span>{errors.login}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="login" placeholder={'login'} value={values.login} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.formWrapper}>
						<label htmlFor="password" className={style.formLabel}>
							<span className={style.formLabelText}>Password: {touched.password && errors.password && <span>{errors.password}</span>}</span>
						</label>
						<Field className={style.input} type="password" name="password" placeholder={'password'} value={values.password} onBlur={handleBlur} onChange={handleChange} />
					</div>

					{captcha &&
						<div className={style.formWrapper}>
							<label htmlFor="password" className={style.formLabel}>
								<span className={style.formLabelText}>Captcha: {touched.captcha && errors.captcha && <span>{errors.captcha}</span>}</span>
							</label>
							<Field className={style.input} type="text" name="captcha" value={values.captcha} onBlur={handleBlur} onChange={handleChange} />
							<img style={{ marginTop: "10px" }} src={captcha} alt="" />
						</div>
					}

					<div className={style.formWrapper}>
						<Field type="checkbox" name="remember" onBlur={handleBlur} onChange={handleChange} />
						<span style={{ display: "inline-block" }} className={style.formLabelText}>Remember me?</span>
					</div>

					{status?.error && <div className={style.formError}>{status.error}</div>}

					<div className={style.formWrapper}>
						<button className={style.formButton} type={'submit'} disabled={!isValid && !dirty}>Login</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}