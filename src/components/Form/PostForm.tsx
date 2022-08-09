
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup';
import style from './../Profile/MyPosts/MyPosts.module.css'

export const PostForm = (props: any) => {
	const validationSchema = yup.object({
		post: yup.string().typeError('Invalid login').required('Required')
	})

	return (
		<Formik initialValues={{ post: '' }} validateOnBlur
			onSubmit={(post, { resetForm }) => {
				props.onSubmit(post);
				resetForm({})
			}} validationSchema={validationSchema}>
			{({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
				<Form>
					<div className={style.addPost}>
						<div className={style.addPost__title}>Write a new post... {touched.post && errors.post && <span>{errors.post}</span>}</div>
						<div className="textarea">
							<Field className={'textarea'} component={'textarea'} name="post" onBlur={handleBlur} onChange={handleChange} />
							<button disabled={!isValid && !dirty} type={'submit'} >Add</button>
						</div>
					</div>
				</Form>
			)}

		</Formik>
	)
}