import { useState } from "react";
import { AdminHandler } from "./LoginProses";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const values = { email, password };
    try {
      const res = await AdminHandler(values);
      console.log(res);
      if (res.status === true) {
        navigate("/dashboard");
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
      <form onSubmit={submitHandler}>
        <h1 className="butopia123">butopia.</h1>
        <h2 className="jelas">-Login-</h2>
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
              {showPassword ? <VisibilityOutlinedIcon /> : < VisibilityOffOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        </div>
        <button type="submit" className="buttoni">Login</button>
      </form>
    </div>
  );

};

export default LoginAdmin;