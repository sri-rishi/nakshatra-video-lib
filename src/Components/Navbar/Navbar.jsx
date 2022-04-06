import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "../../assets";
import { useAuth } from "../../Context";
import { Button } from "../index";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
    const {isUserLoggedIn, user} = useAuth();
    return (
        <div>
            <nav className="nav-box navbar-box flex-row align-center justify-evenly">
                <div className="nav-section title-section flex-row align-center justify-evenly">
                    <Button className="hamburger display-none btn-border-none bg-transparent" icon={<GiHamburgerMenu className="icon-vr-align"/>} />
                    <NavLink to="/">
                        <div className="title font-weight-3">
                            cliq <span className="sub-title">TUbE</span>
                        </div>
                    </NavLink>
                </div>

                <SearchBar />
                
                <div className="nav-section flex-row align-center justify-center">
                    {
                        <NavLink to="/user/user-profile">
                            <Button 
                                text={isUserLoggedIn ? user.firstName : "Login"} 
                                className={`btn ${isUserLoggedIn ? "card-shadow primary-color-text font-weight-5" : "btn-primary"} md-screen-hidden`} 
                            />
                        </NavLink>
                    }
                </div>         
            </nav>
        </div>
    )
}