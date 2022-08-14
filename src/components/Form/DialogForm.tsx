import { Field, Form, Formik, FormikValues } from "formik";
import * as yup from 'yup';

type DialogFormPropsType = {
	onSubmit: (message: string) => void
}

const validationSchema = yup.object({
	message: yup.string().typeError('Invalid login').required('Required')
})

export const DialogForm = (props: DialogFormPropsType) => {
	const onSubmitHandler = (message: { message: string }, { resetForm }: FormikValues) => {
		props.onSubmit(message.message);
		resetForm({})
	}

	return (
		<Formik initialValues={{ message: '' }} onSubmit={onSubmitHandler} validationSchema={validationSchema} validateOnBlur>
			{({ errors, touched, handleChange, handleBlur, isValid, dirty }) => (
				<Form>
					<div>
						{touched.message && errors.message && <span>{errors.message}</span>}
					</div>
					<div className="textarea">
						<Field className={'textarea'} component={'textarea'} name="message" onBlur={handleBlur} onChange={handleChange} />
						<button disabled={!isValid && !dirty} type={'submit'} >Send message</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}