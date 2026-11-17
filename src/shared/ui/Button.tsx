import "./Button.css";

type ButtonProps = {
    label: string;
    onClick: () => void;
    icon?: string;
};

export function Button({ label, onClick, icon }: ButtonProps) {
    return (
        <button className="custom-button" onClick={onClick}>
            {icon && <img src={icon} alt="" />}
            {label}
        </button>
    );
}