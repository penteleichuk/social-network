
import { Field, Form, Formik, FormikValues } from 'formik'
import * as yup from 'yup';
import styles from './../Profile/MyPosts/MyPosts.module.css'

type PostFormPropsType = {
	onSubmit: (post: string) => void
}

const validationSchema = yup.object({
	post: yup.string().typeError('Invalid login').required('Required')
})

export const PostForm = (props: PostFormPropsType) => {
	const onSubmitHandler = (post: { post: string }, { resetForm }: FormikValues) => {
		props.onSubmit(post.post);
		resetForm({})
	}

	return (
		<Formik initialValues={{ post: '' }} onSubmit={onSubmitHandler} validationSchema={validationSchema} validateOnBlur>
			{({ errors, touched, handleChange, handleBlur, isValid, dirty }) => (
				<Form>
					<div className={styles.addPost}>
						<div className={styles.addPost__title}>
							Write a new post... {touched.post && errors.post && <span>{errors.post}</span>}
						</div>
						<div className="textarea">
							<Field className={'textarea'} component={'textarea'} name="post" onBlur={handleBlur} onChange={handleChange} />
							<button disabled={!isValid && !dirty} type={'submit'} >Post</button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	)
}