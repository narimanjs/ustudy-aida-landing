import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  color: "primary" | "secondary" | "accent" | "danger" | "success";
  size?: string;
  onClick?: () => void;
  disableScale?: boolean;
}

const Button = ({ text, color, size, onClick, disableScale }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${
        disableScale ? styles.noScale : ""
      }`}
      style={size ? { padding: size } : {}}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
