import { Link } from "react-router-dom";
import { Button } from "../index";

export const EmptyPage = ({imageSrc, altText, pageName}) => {
    return (
        <div className="empty-box flex-column align-center justify-center">
            <div className="flex-column align-center gap-1">
                <div className="empty-box-image">
                    <img className="img-responsive" src={imageSrc ? imageSrc : ""} alt={altText ? altText : ""} />
                </div>
                <p className="xsm-heading">No items in {pageName ? pageName : ""}</p>
                <Link to="/">
                    <Button className="btn btn-primary" text="Shop Now"/>
                </Link>
            </div>
        </div>
    )
}