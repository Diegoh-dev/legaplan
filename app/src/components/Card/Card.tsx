import Image from "next/image";
import styles from "./card.module.scss";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  setOpenModalDelete: Dispatch<SetStateAction<boolean>>;
  setTasks: Dispatch<SetStateAction<string[]>>;
  tasks: string[];
  setTaskToDelete: Dispatch<SetStateAction<number | null>>;
  isDelete: boolean;
  setTasksCompleted?: Dispatch<SetStateAction<string[]>>;
  tasksCompleted: string[];
  setOpenModalDeleteCompleted: Dispatch<SetStateAction<boolean>>;
}
export function Card({
  setOpenModalDelete,
  setTasks,
  tasks,
  setTaskToDelete,
  isDelete,
  setTasksCompleted,
  tasksCompleted,
  setOpenModalDeleteCompleted,
}: Props) {
  useEffect(() => {
    const tasksStorage = localStorage.getItem("tasks");
    const tasksCompletedStorage = localStorage.getItem("tasksCompleted");
    if (tasksStorage) {
      const storedTasks = JSON.parse(tasksStorage) || [];
      setTasks(storedTasks);
    }

    if (tasksCompletedStorage && setTasksCompleted) {
      const storedTasks = JSON.parse(tasksCompletedStorage) || [];
      setTasksCompleted(storedTasks);
    }
  }, []);

  function FnTaskCompleted(index: number, taskChecked: string) {
    if (setTasksCompleted) {
      setTasksCompleted([...tasksCompleted, taskChecked]);
      localStorage.setItem(
        "tasksCompleted",
        JSON.stringify([...tasksCompleted, taskChecked])
      );

      const updatedTasks = tasks.filter((_item, i) => i !== index);

      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  }

  return (
    <>
      {tasks?.map((tasksItens, index) => {
        return (
          <label
            className={styles.card}
            key={`${tasksItens}-${index}`}
            htmlFor={tasksItens}
          >
            <div className={styles.input}>
              <input
                disabled={isDelete}
                type="checkbox"
                id={tasksItens}
                defaultChecked={isDelete}
                onChange={() => {
                  if (!isDelete) {
                    FnTaskCompleted(index, tasksItens);
                  }
                }}
              />
              <span
                style={{
                  textDecoration: isDelete ? "line-through" : "",
                  color: isDelete ? "#999" : "",
                }}
              >
                {tasksItens}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isDelete) {
                  setOpenModalDeleteCompleted(true);
                } else {
                  setOpenModalDelete(true);
                }

                setTaskToDelete(index);
              }}
            >
              <Image
                src="/assets/trash.png"
                width={24}
                height={24}
                alt="trash"
              />
            </button>
          </label>
        );
      })}
    </>
  );
}
