import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export const Settings = (props: any) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!props.userId) {
			navigate('/login');
		}
	}, [])

	return <div></div>
}