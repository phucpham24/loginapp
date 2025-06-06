import React, { useContext, useEffect, useState } from "react";
import "./login.scss"; // Import the CSS file
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const {loginContext} = useContext(UserContext)

    useEffect(()=>{
        let token = localStorage.getItem("token");
        if (token){
            navigate("/")
        }
    }, [])

    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async ()=>{
    if(!username || !password){
        toast.error("missing Email/Password")
        return;
    }
    // Check if the email has the correct format
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(username)) {
        toast.error("Email must be a Gmail address (@gmail.com)");
        return;
    } 

    let res = await loginApi(username, password);
    console.log("check res",res.status)
    console.log("check res",res.data.access_token)
    if (res && res.data.access_token) {
        loginContext(username, res.data.access_token, res.data.user.role.name);
        toast.success("Login successful!");
        console.log(">>>> login", res.data);
        console.log(">>>> login", res.data.user.role.name);
        navigate("/")
    } else {
        if(res && +res.status >= 400){
            toast.error("Username/Passwords incorrect");
        }
        
    }

  }

    const navigate = useNavigate();
return (
    <div className="login-container">
        <div className="login-box">
            <h2>Log in test@gmail.com</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="input-field"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <div className="password-container">
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                        className="input-field password-input"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button
                    type="submit"
                    className="login-button"
                    onClick={() => {
                        if (!username || !password) {
                            toast.error("Please enter both username and password");
                        } else {
                            // console.log("Username:", username);
                            // console.log("Password:", password);
                            handleLogin();
                        }
                    }}
                >
                    Login
                </button>
            </form>
            <p>Forgot Password?</p>
        </div>
    </div>
);
};

export default Login;
