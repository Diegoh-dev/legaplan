"use client";
import { useEffect, useState } from "react";
import { Card } from "./src/components/Card/Card";
import { Header } from "./src/components/Header";
import styles from "./style.module.scss";
import { ModalComponent } from "./src/components/Modal/ModalComponent";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalDeleteCompleted, setOpenModalDeleteCompleted] =
    useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  function addTask() {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
      setOpenModal(false);
    }
  }

  const removeTask = (index: number, lista: string[]) => {
    const updatedTasks = lista.filter((_item, i) => i !== index);

    if (openModalDelete) {
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    if (openModalDeleteCompleted) {
      setTasksCompleted(updatedTasks);
      localStorage.setItem("tasksCompleted", JSON.stringify(updatedTasks));
    }

    setOpenModalDelete(false);
    setOpenModalDeleteCompleted(false);
    setTaskToDelete(null);
  };

  useEffect(() => {
    const tasksStorage = localStorage.getItem("tasks");
    if (tasksStorage) {
      const storedTasks = JSON.parse(tasksStorage) || [];
      setTasks(storedTasks);
    }
  }, []);

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
            FnConfirmation={addTask}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </>
      )}

      {openModalDelete && (
        <>
          <div className={styles.overlay}></div>
          <ModalComponent
            open={openModalDelete}
            setOpenModal={setOpenModalDelete}
            title="Deletar tarefa"
            isDelete={true}
            isDeleteCompleted={false}
            nameButton="Deletar"
            FnConfirmation={() => {
              if (taskToDelete) {
                removeTask(taskToDelete, tasks);
              }
            }}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </>
      )}


      {openModalDeleteCompleted && (
        <>
          <div className={styles.overlay}></div>
          <ModalComponent
            open={openModalDeleteCompleted}
            setOpenModal={setOpenModalDeleteCompleted}
            title="Deletar tarefa"
            isDelete={false}
            isDeleteCompleted={true}
            nameButton="Deletar"
            FnConfirmation={() => {
              if (taskToDelete) {
                removeTask(taskToDelete, tasksCompleted);
              }
            }}
            newTask={newTask}
            setNewTask={setNewTask}
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

            {tasks.length === 0 ? (
              <div className={styles.tasks}>Nenhuma tarefa adicionada</div>
            ) : (
              <Card
                setOpenModalDelete={setOpenModalDelete}
                setTasks={setTasks}
                tasks={tasks}
                setTaskToDelete={setTaskToDelete}
                isDelete={false}
                tasksCompleted={tasksCompleted}
                setTasksCompleted={setTasksCompleted}
                setOpenModalDeleteCompleted={setOpenModalDeleteCompleted}
              />
            )}

            <p className={styles.title}>Tarefas finalizadas</p>

            {tasksCompleted.length === 0 ? (
              <div className={styles.tasks}>Nenhuma tarefa concluída</div>
            ) : (
              <Card
                setOpenModalDelete={setOpenModalDelete}
                setTasks={setTasks}
                tasks={tasksCompleted}
                setTaskToDelete={setTaskToDelete}
                isDelete
                setTasksCompleted={setTasksCompleted}
                tasksCompleted={tasksCompleted}
                setOpenModalDeleteCompleted={setOpenModalDeleteCompleted}
              />
            )}
          </div>

          <button className={styles.button} onClick={() => setOpenModal(true)}>
            <span>Adicionar nova tarefa</span>
          </button>
        </main>
      </div>
    </>
  );
}
