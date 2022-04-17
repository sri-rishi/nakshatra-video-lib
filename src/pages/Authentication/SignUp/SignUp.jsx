import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useToast } from "../../../Context";
import { Button, Navbar } from "../../../Components/index";
import { signInHandler } from "../../../ApiCalls";


export const SignUp = () => {
    const [isUserAgree, setIsUserAgree] = useState(false);
    const {authDispatch} = useAuth();
    const {setToastData} = useToast();
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });


    const passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{9,16}$/;
    const validatePassword = passwordPattern.test(userDetails.password);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validateEmail = emailPattern.test(userDetails.email);

    const disableButton = () => {
        return (
        userDetails.firstName === "" &&
        userDetails.secondName === "" &&
        !validateEmail &&
        !validatePassword
        )
    }

    const signupHandler = (e) => {
        e.preventDefault()
        signInHandler(userDetails, authDispatch, navigate, setToastData);
    }

    return (
        <div>
            <Navbar />
            <main className="signUp-main flex-row align-center justify-center">
                <form className="form-box signUp-form">
                    <div className="form-head">
                        <h4 className="sm-heading">Sign Up</h4>
                    </div>
                    <label className="form-label" htmlFor="first-name" aria-label="First Name">First Name
                        <input 
                        className="input std-input" 
                        type="text" id="first-name" 
                        name="first-name" 
                        placeholder="Enter First Name"
                        value={userDetails.firstName} 
                        onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}/>
                    </label>
                
                    <label className="form-label" htmlFor="last-name" aria-label="Last Name" >Last Name
                        <input 
                        className="input std-input" 
                        type="text" id="last-name" 
                        name="last-name" 
                        placeholder="Enter Last Name"
                        value={userDetails.lastName} 
                        onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
                        />
                    </label>
                
                    <label className="form-label" htmlFor="email" aria-label="Email">Email
                        <input 
                        className="input std-input" 
                        type="email"  
                        id="email" 
                        name="email" 
                        placeholder="Enter Your Email" 
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                        />
                    </label>
                
                    <label className="form-label" htmlFor="password" aria-label="Password">Password
                        <input 
                        className="input std-input" 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter Your Password" 
                        value={userDetails.password}
                        onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
                        />
                    </label>
                    
                    <label htmlFor="accept-all" aria-label="Accept condition checkbox">
                        <input 
                        className="check-input cursor-pointer" 
                        id="accept-all" 
                        name="accept-all" 
                        type="checkbox"
                        checked={isUserAgree}
                        onChange={() => setIsUserAgree(!isUserAgree)}
                        />
                        I accept all terms and condition
                    </label>
                    
                    <Button 
                        className="form-cta btn btn-primary" 
                        onClick={(e) => signupHandler(e)} 
                        text="Sign Up" 
                        disabled={!isUserAgree && !disableButton()}
                    />
                    
                    <Link to="/login">
                        <Button className="form-cta btn btn-outline-primary" text="Already have an account"/>
                    </Link>

                </form>
        </main>
        </div>
    )
}