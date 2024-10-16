import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  color: "primary" | "secondary" | "accent" | "danger" | "success";
  size: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, color, size, onClick }) => {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      style={{ "--button-padding": size } as React.CSSProperties}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
