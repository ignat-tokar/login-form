import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function Login({login, password, setAuth}) {
	const [loginValue, setLoginValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const navigate = useNavigate();
	const onLoginChange = (event) => {
		setLoginValue(event.target.value);
	}
	const onPassChange = (event) => {
		setPassValue(event.target.value);
	}
	const navFunc = () => {
		console.log(loginValue);
		console.log(passValue);
		if(loginValue === login && passValue === password){
			setAuth(true);
			localStorage.setItem('test-login-form-auth-state', true);
			navigate('/welcome');			
		}
	}
	return (
		<Wrapper>
			<input type="text" value={loginValue} onChange={onLoginChange} placeholder={login}/>
			<input type="text" value={passValue} onChange={onPassChange} placeholder={password}/>
			<button onClick={navFunc}>Login</button>
		</Wrapper>
	);
}

export default Login;