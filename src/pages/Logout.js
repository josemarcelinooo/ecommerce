import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Logout() {
	const { setUser, unsetUser } = useContext(UserContext);

	unsetUser();

	useEffect(() => {
		setUser({
			id: null,
			isAdmin: null
		})
	}, [setUser])

	window.location.href = "/login";
	
	return(
		<Navigate to="/login" replace={true} />
	)
}