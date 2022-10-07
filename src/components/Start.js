import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function Start() {
	const navigate = useNavigate();
	const navFunc = () => {
		navigate('/login');
	}
	return (
		<Wrapper>
			<button onClick={navFunc}>Start</button>
		</Wrapper>
	);
}

export default Start;