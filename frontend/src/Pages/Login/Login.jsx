import { useState } from "react";
import { LoginHandler } from "./LoginProses";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
// import { AiOutlineEye } from "react-icons/ai";
// import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const values = { email, password };

		try {
			const res = await LoginHandler(values);
			console.log(res);
			if (res.success === true) {
				navigate("/dashboarduser");
			}
		} catch (error) {
			console.error("error:", error);
		}
	};

	return (
		
			<div className="wrapper">
				<form onSubmit={submitHandler}>
					<h1 className="butopia">butopia.</h1>
					<h2 className="jelas">-Sign In-</h2>
					<h5 className="teks">Email</h5>
					<div className="input-box">
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<MdOutlineMail className="icon" />
					</div>
					<h5 className="teks">Password</h5>
					<div className="input-box">
				 		<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<FiLock className="icon" />
						
					</div>
					<button type="submit" className="buttoni">Login</button>
					<a href="http://localhost:3000/dashboarduser" type="submit" className="buttoni">Sign In</a>
					<div className="register-link">
          				<p>Don't have an account?<a href="/register">Register</a></p>
        			</div>
				</form>
			</div>
		
	);
};

export default Login;