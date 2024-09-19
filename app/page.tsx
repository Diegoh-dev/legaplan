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
      <p className={styles.title}>Tarefas finalizadas</p>
      </div>

      <button className={styles.button}>
        <span>
      Adicionar nova tarefa
        </span>
      </button>
      </main>
 
    </div>
  );
}
