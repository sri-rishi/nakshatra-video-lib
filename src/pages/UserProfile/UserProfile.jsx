import { Link } from "react-router-dom";
import { Button, Navbar } from "../../Components/index";
import { useAuth } from "../../Context";

export const UserProfile = () => {
    const {user, authDispatch} = useAuth();

    return (
        <div>
            <main className="userProfile-main flex-row align-center justify-center">
                <div className="profile-service-card flex-column justify-center align-center gap-3 card-shadow">
                    <h3 className="sm-heading font-weight-4">Account</h3>
                    <div className="profile-details grid grid-30-70-layout">
                        <ul className="profile-service-list flex-column">
                            <li className="profile-services flex-row align-center green-sm-text">
                                Profile
                            </li>
                            <li className="profile-services">
                                Order
                            </li>
                            <li className="profile-services">
                                Addresses
                            </li>
                            <li className="profile-services">
                                Settings
                            </li>
                        </ul>
                        <div>
                            <div className="service-detail-box flex-column gap-2">
                                <h4 className="font-weight-5">Profile Details</h4>
                                <div>
                                    <p className="grid grid-30-70-layout">Full Name <span> {user.firstName} {user.lastName}</span></p>
                                    <p className="grid grid-30-70-layout">Email <span>{user.email}</span></p>
                                </div>
                                <div className="flex-column align-flex-end">
                                    <Link to="/">
                                        <Button className="btn btn-primary btn-right" text="Logout" onClick={() => authDispatch({type: "LOGOUT"})}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}