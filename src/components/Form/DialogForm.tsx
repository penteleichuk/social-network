import { Field, Form, Formik } from "formik";
import * as yup from 'yup';

// type DialogFormPropsType = {
// 	onSubmit: (message: string) => void
// }

export const DialogForm = (props: any) => {
	const validationSchema = yup.object({
		message: yup.string().typeError('Invalid login').required('Required')
	})

	return (
		<Formik initialValues={{ message: '' }} validateOnBlur
			onSubmit={(message, { resetForm }) => {
				props.onSubmit(message);
				resetForm({})
			}} validationSchema={validationSchema}>
			{({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
				<Form>
					<div>{touched.message && errors.message && <span>{errors.message}</span>}</div>
					<div className="textarea">
						<Field className={'textarea'} component={'textarea'} name="message" onBlur={handleBlur} onChange={handleChange} />
						<button disabled={!isValid && !dirty} type={'submit'} >Send</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}