import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import { loginHandler, postTestLoginUser } from "../../../ApiCalls";
import { useAuth, useToast } from "../../../Context";
import { Button } from "../../../Components/index";

export const Login = () => {
    const {authDispatch} = useAuth();
    const {setToastData} = useToast();
    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const signinHandler = (e) => {
        e.preventDefault();
        loginHandler(userInput, authDispatch, navigate, setToastData);
    }

    const testLoginHandler = (e) => {
        e.preventDefault();
        postTestLoginUser(authDispatch, navigate, setToastData);
    }

    const disableLoginButton = () => {
        return (userInput.email !== "" && userInput.password !== "");
    }
  
    return (
        <main className="login-main flex-row align-center justify-center">
            <form className="form-box login-form" action="#">
                <div className="form-head">
                    <h4 className="sm-heading">Login</h4>
                </div>
            
                <label className="form-label" htmlFor="email" aria-label="Email">Email
                    <input 
                        className="input std-input" 
                        type="email"  
                        id="email" 
                        name="email" 
                        placeholder="Enter Your Email"
                        value={userInput.email} 
                        onChange={(e) => setUserInput({...userInput, email: e.target.value})}
                        required
                    />
                </label>
            
                <label className="form-label" htmlFor="password" aria-label="Password">Password
                    <input 
                        className="input std-input" 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter Your Password" 
                        value={userInput.password}
                        onChange={(e) => setUserInput({...userInput, password: e.target.value})}
                        required
                    />
                </label>
                <div className="check-forgot-div">
                    <p className="p-highlight login-p">Forgot Your Password</p>
                </div>
            
                <Button className="form-cta btn btn-primary" onClick={(e) => signinHandler(e)} text="Login" disabled={!disableLoginButton()}/>
                <Button className="form-cta btn bg-primary-dark" onClick={(e) => testLoginHandler(e)} text="Login As Guest"/>
                <Link to="/signup">
                    <Button className="form-cta btn btn-outline-primary" text="Create New Account" />
                </Link>
            </form>
        </main>
    )
}