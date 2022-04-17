import { Link } from "react-router-dom";
import { Button } from "../index";

export const EmptyPage = ({imageSrc, altText, pageText}) => {
    return (
        <div className="empty-box flex-column align-center justify-center">
            <div className="flex-column align-center gap-1">
                <div className="empty-box-image">
                    <img className="img-responsive" src={imageSrc ? imageSrc : ""} alt={altText ? altText : ""} />
                </div>
                <p className="xsm-heading">{pageText ? pageText: ""}</p>
                <Link to="/">
                    <Button className="btn btn-primary" text="Start Adding"/>
                </Link>
            </div>
        </div>
    )
}