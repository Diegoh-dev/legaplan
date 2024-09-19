import styles from "./card.module.scss";
export function Card() {
  return (
    <div className={styles.card}>
      <input type="checkbox" />
      <span>Lavar as mãos</span>
    </div>
  );
}
