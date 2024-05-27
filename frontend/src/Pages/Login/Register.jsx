import { useState } from "react";
import { RegisterHandler } from "./LoginProses";
import { useNavigate } from "react-router-dom";
import './Register.css';
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Register = () => {
	const [nama, setNama] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		const values = { nama, email, password };

		try {
			const res = await RegisterHandler(values);
			console.log(res);
			if (res.success === true) {
				navigate("/login");
			}
		} catch (error) {
			console.error("error:", error);
		}
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	  };

	return (
		<div className="wrapper">
			<div className="wrapper">
				<form onSubmit={submitHandler}>
					<h1 className="butopia2">butopia.</h1>
					<h2 className="jelas">-Register-</h2>
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
							type={showPassword ? "text" : "password"}
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<FiLock className="icon" />
						<InputAdornment className="pw" position="end">
						<IconButton
							className="iconbut"
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOutlinedIcon /> : < VisibilityOffOutlinedIcon/>}
						</IconButton>
					</InputAdornment>
					</div>

					<button type="submit" className="buttoni">Register</button>
					<div className="linkiy">
          				<p>Already have an account?<a href="/">Login</a></p>
        			</div>
				</form>
			</div>
		</div>
	);
};

export default Register;