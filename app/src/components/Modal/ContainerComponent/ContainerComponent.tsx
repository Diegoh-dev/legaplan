import { ReactNode } from "react";
import styles from '../styleModal.module.scss';
interface CContainertProps {
  children: ReactNode;
}

export function Container({ children }: CContainertProps) {
  return <div className={styles.container}>{children}</div>;
}
