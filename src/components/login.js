import React, { useState } from "react";
import "./login.scss"; // Import the CSS file
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import { loginApi } from "../services/UserService";
import { toast } from "react-toastify";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async ()=>{
    console.log(username,password)
    // if(!username || !password){
    //     toast.error("missing Email/Password")
    //     return;
    // }
    // console.log(username,password)
    let res = await loginApi(username,password);
    let accessToken = res.data.data.accessToken
    if(res && accessToken){
        localStorage.setItem("token", accessToken)
    }

    console.log(">>>>check login", accessToken);
  }

return (
    <div className="login-container">
        <div className="login-box">
            <h2>Log in</h2>
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
                            console.log("Username:", username);
                            console.log("Password:", password);
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
