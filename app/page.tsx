import { Card } from "./src/components/Card/Card";
import { Header } from "./src/components/Header";
import styles from "./style.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>

      <div className={styles.cardContainer}>
      <p className={styles.title}>Suas tarefas de hoje</p>
      <Card/>
      </div>
      </main>
 
    </div>
  );
}
