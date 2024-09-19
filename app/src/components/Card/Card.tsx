import Image from "next/image";
import styles from "./card.module.scss";
export function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.input}>
        <input type="checkbox" />
        <span>Lavar as mãos</span>
        </div>
      <Image src='/assets/trash.png' width={24} height={24} alt="logomark"/>
    </div>
  );
}
