import {BsCodeSlash, BsGithub, ImLinkedin, BsTwitter, SiMaildotru} from "../../assets/icons";
export const Footer = () => {
    return (
        <footer className="footer-box flex-column justify-center align-center gap-2">
            <p>Made in <BsCodeSlash  className="icon-vr-align"/> by Rishi</p>
            <div className="footer-icons flex-row align-center gap-3">
                <a className="social-icon" href="https://github.com/sri-rishi/nakshatra-watch-ecomm">
                    <BsGithub className="icon-vr-align"/>
                </a>
                <a className="social-icon" href="https://www.linkedin.com/in/rishi-srivastava-8311761b7/">
                    <ImLinkedin className="icon-vr-align"/>
                </a>
                <a className="social-icon" href="https://twitter.com/sri26_rishi">
                    <BsTwitter className="icon-vr-align"/>
                </a>
                <a className="social-icon" href="mailto:sririshi2612@gmail.com">
                    <SiMaildotru className="icon-vr-align"/>
                </a>
            </div>
        </footer>
    )
}