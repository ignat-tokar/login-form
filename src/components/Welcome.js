import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function Welcome() {
	const navigate = useNavigate();
	const navFunc = () => {
		navigate('/');
	}
	return (
		<Wrapper>
			<h1 onClick={navFunc}>Welcome</h1>
		</Wrapper>
	);
}

export default Welcome;