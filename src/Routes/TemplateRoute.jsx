import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, PlaylistModal} from "../Components/index";

export const TemplateRoute = () => {
    return (
        <div className="body-template">
            <Navbar />
            <Sidebar />
            <PlaylistModal />
            <Outlet />
        </div>
    )
}