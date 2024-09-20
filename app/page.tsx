"use client";
import { useState } from "react";
import { Card } from "./src/components/Card/Card";
import { Header } from "./src/components/Header";
import styles from "./style.module.scss";
import { ModalComponent } from "./src/components/Modal/ModalComponent";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && (
        <>
          <div className={styles.overlay}></div>
          <ModalComponent 
          open={openModal} 
          setOpenModal={setOpenModal}
           title="Nova tarefa" 
           isDelete={false}
           nameButton="Adicionar"
           />
        </>
      )}
      <div
        className={`${styles.container} `}
        style={{
          opacity: openModal ? "40%" : "inherit",
        }}
      >
        <Header />

        <main className={styles.main}>
          <div className={styles.cardContainer}>
            <p className={styles.title}>Suas tarefas de hoje</p>
            <Card />
            <p className={styles.title}>Tarefas finalizadas</p>
          </div>

          <button className={styles.button} onClick={() => setOpenModal(true)}>
            <span>Adicionar nova tarefa</span>
          </button>
        </main>
      </div>
    </>
  );
}
