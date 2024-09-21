"use client";
import { useEffect, useState } from "react";
import { Card } from "./src/components/Card/Card";
import { Header } from "./src/components/Header";
import styles from "./style.module.scss";
import { ModalComponent } from "./src/components/Modal/ModalComponent";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalDeleteCompleted, setOpenModalDeleteCompleted] = useState(false);
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

  const removeTask = (index: number,lista:string[]) => {
    console.log('caiu')
    if(index == 0){
      lista.splice(0,1);
    }
    const updatedTasks = lista.filter((_item, i) => i !== index);
    // const updatedTasksCompleted = tasks.filter((_item, i) => i == index);
//Inter Tight
    if(openModalDelete){
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    if(openModalDeleteCompleted){
      setTasksCompleted(updatedTasks);
      localStorage.setItem("tasksCompleted", JSON.stringify(updatedTasks));

    }

    // setTasksCompleted([...tasksCompleted, ...updatedTasksCompleted]);
    // localStorage.setItem(
    //   "tasksCompleted",
    //   JSON.stringify(updatedTasksCompleted)
    // );
    // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setOpenModalDelete(false);
    setOpenModalDeleteCompleted(false);
    setTaskToDelete(null);
  };


  // const removeTask = (index: number, lista: string[]) => {
  //   // Verifique se o índice é válido
  //   if (index >= 0 && index < lista.length) {
  //     const updatedTasks = lista.filter((_item, i) => i !== index); // Remove a tarefa no índice fornecido
  
  //     // Atualiza a lista de tarefas pendentes
  //     if (openModalDelete) {
  //       setTasks(updatedTasks);
  //       localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  //     }
  
  //     // Atualiza a lista de tarefas completadas
  //     if (openModalDeleteCompleted) {
  //       setTasksCompleted(updatedTasks);
  //       localStorage.setItem("tasksCompleted", JSON.stringify(updatedTasks));
  //     }
  
  //     // Fecha os modais e reseta a tarefa a ser deletada
  //     setOpenModalDelete(false);
  //     setOpenModalDeleteCompleted(false);
  //     setTaskToDelete(null);
  //   } else {
  //     console.warn("Índice fora dos limites");
  //   }
  // };
  

  useEffect(() => {
    const tasksStorage = localStorage.getItem("tasks");
    // const tasksCompletedStorage = localStorage.getItem("tasksCompleted");
    if (tasksStorage) {
      const storedTasks = JSON.parse(tasksStorage) || [];
      setTasks(storedTasks);
    }

    // if (tasksCompletedStorage) {
    //   const storedTasks = JSON.parse(tasksCompletedStorage) || [];
    //   if
    //   setTasksCompleted(storedTasks);
    // }
    
  }, []);

  console.log({
    taskToDelete
  })

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
                removeTask(taskToDelete,tasks);
              }
            }}
            newTask={newTask}
            setNewTask={setNewTask}
          />
        </>
      )}

      {/* /// */}

      
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
