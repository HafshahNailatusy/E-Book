import React, {useState} from 'react';
import './Styles/login.css';
import { AdminHandler } from '../../Pages/Login/LoginProses';
import { useNavigate } from 'react-router-dom';
import { FiLock } from "react-icons/fi";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from "@mui/material/IconButton";

export default function LoginAdmin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
  
  const submitHandler = async (e) => {
		e.preventDefault();
		const values = { email, password };

		try {
			const res = await AdminHandler(values);
			console.log(res);
			if (res.success === true) {
				navigate("/adminPannel");
			}
		} catch (error) {
			console.error("error:", error);
		}
	};
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	  };

  return (<div className="bodyWrap">
    <div className="contentLoginWrap">
      <div className="loginSide">
        <div className="loginWrap">
          <h1>Log in</h1>
          <div className="input-group">
            <input type="text" className="input" onChange={e => setEmail(e.target.value)} required="required"/>
            <label className={`${email.length > 0 ? "focusLabel" : ""}`}>Login</label>
          </div>
          <div className="input-group">
            <input type="text" className="input password" onChange={e => setPassword(e.target.value)} required="required"/>
            <label className={`${password.length > 0 ? "focusLabel" : ""}`}>Password</label>
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
          <button type='submit'>Login</button>
        </div>
      </div>
      <div className="infoSide">
        <div className="loginWrap">
          <h2>Hello again!</h2>
          <p>Log in to your account to get access to app.</p>
        </div>
      </div>
    </div>
  </div>)
}
