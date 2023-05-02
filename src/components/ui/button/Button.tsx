import { ButtonHTMLAttributes, FC } from "react";

import classes from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={className ? classes.button + " " + className : classes.button}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
