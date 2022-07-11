import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	maxWidth?: string;
	fontSize?: string;
}

const Button = ({ onClick, children, maxWidth, fontSize }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.Button} style={{ maxWidth, fontSize }}>
			{children}
		</button>
	);
};

export default Button;
