import Image from "next/image";
import styles from "./stylesHeader.module.scss";

export function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/assets/Logomark.png"
            width={33}
            height={33}
            alt="logomark"
          />
          <h1>FocalPoint</h1>
        </div>

        <div className={styles.message}>
          <p>Bem-vindo de volta, Marcus</p>
        </div>

        <div className={styles.data}>
          <p>Segunda, 01 de dezembro de 2025</p>
        </div>
      </header>

      <div className={styles.row}></div>
    </>
  );
}
