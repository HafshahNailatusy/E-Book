import { useState } from "react";
import { LoginHandler } from "./LoginProses";
import { useNavigate } from "react-router-dom";

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
				navigate("/dashboard");
			}
		} catch (error) {
			console.error("error:", error);
		}
	};

	return (
		<div>
			<div>
				<form onSubmit={submitHandler}>
					<h1>Login</h1>
					<div>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit">Login</button>
					<div>
						<p>
							Anda belum memiliki akun? <a href="./register">Registrasi</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;