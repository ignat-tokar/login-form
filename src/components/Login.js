import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function Login() {
	const navigate = useNavigate();
	const navFunc = () => {
		navigate('/welcome');
	}
	return (
		<Wrapper>
			<input type="text" />
			<input type="text" />
			<button onClick={navFunc}>Login</button>
		</Wrapper>
	);
}

export default Login;