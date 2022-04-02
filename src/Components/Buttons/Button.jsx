export const Button = ({onClick, type, text, className, disabled, icon}) => {
    return (
        <button onClick={onClick ?onClick : () => {}} type={type ? type : ""} className={className} disabled={disabled}>{icon ? icon : "" }{text ? text : ""}</button>
    )
}