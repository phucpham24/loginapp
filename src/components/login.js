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
    try {
        let res = await loginApi(username, password);

        if (res && res.data.data.access_token) {
            localStorage.setItem("token", res.data.data.access_token);
            toast.success("Login successful!");
        } else {
            toast.error("Invalid credentials or unexpected response from server.");
        }
    } catch (error) {
        console.error("Login error:", error);
        toast.error("Username or password is invalid");
    }
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
