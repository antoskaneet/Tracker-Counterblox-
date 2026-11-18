import "./Button.css";

type ButtonProps = {
    label: string;
    onClick: () => void;
    icon?: string;
    className?: string;
};

export function Button({ label, onClick, icon, className }: ButtonProps) {
    return (
        <button
            className={`custom-button ${className ?? ""}`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="" />}
            {label}
        </button>
    );
}