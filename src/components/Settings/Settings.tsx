import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { Field, Form, Formik } from "formik";
import * as yup from 'yup';
import style from './Settings.module.css'

const validationSchema = yup.object({
	fullName: yup.string().required('Required'),
	aboutMe: yup.string().required('Required'),
	lookingForAJobDescription: yup.string().required('Required'),
	facebook: yup.string(),
	twitter: yup.string(),
	github: yup.string(),
	youtube: yup.string(),
	lookingForAJob: yup.boolean(),
});

export const Settings = (props: any) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!props.userId) {
			navigate('/login');
		}
	}, [navigate, props.userId])

	const onSaveHandler = (data: any) => {
		const requestData = {
			fullName: data.fullName,
			aboutMe: data.aboutMe,
			lookingForAJob: data.lookingForAJob,
			lookingForAJobDescription: data.lookingForAJobDescription,
			contacts: {
				facebook: data.facebook,
				twitter: data.twitter,
				github: data.github,
				youtube: data.youtube,
			}
		}

		props.updateHandler(requestData);
	}

	return (
		<Formik initialValues={
			{
				fullName: props.profile?.fullName || undefined,
				aboutMe: props.profile?.aboutMe || undefined,
				lookingForAJobDescription: props.profile?.lookingForAJobDescription || undefined,
				facebook: props.profile?.contacts?.facebook || undefined,
				twitter: props.profile?.contacts?.twitter || undefined,
				github: props.profile?.contacts?.github || undefined,
				youtube: props.profile?.contacts?.youtube || undefined,
				lookingForAJob: props.profile?.lookingForAJob || false
			}
		} validateOnBlur onSubmit={onSaveHandler} validationSchema={validationSchema}>
			{({ values, errors, touched, handleChange, handleBlur, isValid, dirty, status }) => (

				<Form className={style.form}>
					<div className={style.item}>
						<label htmlFor="fullName" className={style.formLabel}>
							<span className={style.formLabelText}>Full Name: {touched.fullName && errors.fullName && <span>{errors.fullName}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="fullName" value={values.fullName} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.item}>
						<label htmlFor="aboutMe" className={style.formLabel}>
							<span className={style.formLabelText}>About Me: {touched.aboutMe && errors.aboutMe && <span>{errors.aboutMe}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="aboutMe" value={values.aboutMe} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.item}>
						<label htmlFor="lookingForAJobDescription" className={style.formLabel}>
							<span className={style.formLabelText}>Description: {touched.lookingForAJobDescription && errors.lookingForAJobDescription && <span>{errors.lookingForAJobDescription}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="lookingForAJobDescription" value={values.lookingForAJobDescription} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.item}>
						<label htmlFor="facebook" className={style.formLabel}>
							<span className={style.formLabelText}>Facebook: {touched.facebook && errors.facebook && <span>{errors.facebook}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="contacts.facebook" value={values.facebook} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.item}>
						<label htmlFor="twitter" className={style.formLabel}>
							<span className={style.formLabelText}>Twitter: {touched.twitter && errors.twitter && <span>{errors.twitter}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="contacts.twitter" value={values.twitter} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.item}>
						<label htmlFor="github" className={style.formLabel}>
							<span className={style.formLabelText}>Github: {touched.github && errors.github && <span>{errors.github}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="github" value={values.github} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.item}>
						<label htmlFor="contacts.youtube" className={style.formLabel}>
							<span className={style.formLabelText}>Youtube: {touched.youtube && errors.youtube && <span>{errors.youtube}</span>}</span>
						</label>
						<Field className={style.input} type="text" name="youtube" value={values.youtube} onBlur={handleBlur} onChange={handleChange} />
					</div>

					<div className={style.itemCheckbox}>
						<span style={{ display: "inline-block" }} className={style.formLabelText}>Looking for a job</span>
						<Field type="checkbox" name="lookingForAJob" onBlur={handleBlur} onChange={handleChange} />
					</div>

					{status?.error && <div className={style.formError}>{status.error}</div>}

					<div className={style.item}>
						<button className={style.formButton} type={'submit'} disabled={!isValid && !dirty}>Save settings</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}