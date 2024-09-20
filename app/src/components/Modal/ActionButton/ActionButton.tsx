import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from '../styleModal.module.scss';


interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
  }
  
  export function ActionButton({ children, ...rest }: ActionButtonProps) {
    return (
      <button  className={styles.buttons} {...rest}>
        {children}
      </button>
    );
  }