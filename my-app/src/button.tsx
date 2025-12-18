type ButtonProps = {
    label: string,
    color: string, 
    handle?: () => void
}
const Button = ({label, color, handle} : ButtonProps) => {
    return(
        <button style={{borderRadius: "5px", fontSize: "14px", padding: ".7rem 1.5rem", color:"white", fontWeight:"500", background: color}} onClick={handle}>{label}</button>
    );
}

export default Button;