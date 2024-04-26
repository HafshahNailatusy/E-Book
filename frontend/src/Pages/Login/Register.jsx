import { useState } from "react";
import { RegisterHandler } from "./LoginProses";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

const Register = () => {
	const [nama, setNama] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const values = { nama, email, password };

		try {
			const res = await RegisterHandler(values);
			console.log(res);
			if (res.success === true) {
				navigate("/loginadmin");
			}
		} catch (error) {
			console.error("error:", error);
		}
	};

	return (
		<div className="wrapper">
			<div className="wrapper">
				<form onSubmit={submitHandler}>
					<h1 className="butopia2">butopia.</h1>
					<h5 className="teks">Name</h5>
					<div className="input-box">
						<input
							type="text"
							id="nama"
							value={nama}
							onChange={(e) => setNama(e.target.value)}
							required
						/>
						
					</div>
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

					<button type="submit" className="buttoni">Register</button>
					<div className="register-link">
          				<p>Already have an account??<a href="/">Login</a></p>
        			</div>
				</form>
			</div>
		</div>
	);
};

export default Register;