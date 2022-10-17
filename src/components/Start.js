import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import Wrapper from "./Wrapper";

function Start({auth}) {
	const navigate = useNavigate();
	const navFunc = () => {
		navigate('/login');
	}
	useEffect(()=>{
		if(localStorage.getItem('test-login-form-auth-state')) {
			navigate('/welcome');
		}
	});
	// if(auth) return <Welcome/>;
	return (
		<Wrapper>
			<button onClick={navFunc}>Start</button>
		</Wrapper>
	);
}

export default Start;