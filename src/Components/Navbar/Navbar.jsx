import { GiHamburgerMenu } from "../../assets";
import { Button } from "../index";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
    return (
        <div>
            <nav className="nav-box navbar-box flex-row align-center justify-evenly">
                <div className="nav-section title-section flex-row align-center justify-evenly">
                    <Button className="hamburger display-none btn-border-none bg-transparent" icon={<GiHamburgerMenu className="icon-vr-align"/>} />
                    <a href="#">
                        <div className="title font-weight-3">
                            cliq <span className="sub-title">TUbE</span>
                        </div>
                    </a>
                </div>

                <SearchBar />
                
                <div className="nav-section flex-row align-center justify-center">
                    <a href="#">
                    <Button 
                        text="Login"
                        className={`btn btn-primary`} 
                    />
                    </a>
                </div>         
            </nav>
        </div>
    )
}