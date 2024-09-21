import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Modal } from "./modal";
import styles from "./styleModal.module.scss";
interface Props {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  title: "Nova tarefa" | "Deletar tarefa";
  isDelete: boolean;
  nameButton: "Adicionar" | "Deletar";
  FnConfirmation: () => void;
  setNewTask: Dispatch<SetStateAction<string>>;
  newTask: string;
  isDeleteCompleted?:boolean;
}
export function ModalComponent({
  open,
  setOpenModal,
  title,
  isDelete = false,
  nameButton,
  FnConfirmation,
  newTask,
  setNewTask,
  isDeleteCompleted,
}: Props) {
  useEffect(() => {
    document.getElementById("titulo")?.focus();
  }, [open]);

  return (
    <>
      {open && (
        <Modal.Container>
          <Modal.TitleComponents title={title} />
          <Modal.ContentComponent>
            {isDelete || isDeleteCompleted ? (
              <Modal.MessageComponent message="Tem certeza que você deseja deletar essa tarefa?" />
            ) : (
              <div className={styles.containerInputs}>
                <label htmlFor="titulo">Título</label>
                <input
                  onChange={(e) => setNewTask(e.target.value)}
                  type="text"
                  id="titulo"
                  placeholder="Digite"
                  value={newTask}
                />
              </div>
            )}
          </Modal.ContentComponent>

          <div className={styles.containerButton}>
            <Modal.ActionButton
              className={styles.cancel}
              onClick={() => setOpenModal(false)}
            >
              Cancelar
            </Modal.ActionButton>
            <Modal.ActionButton
              className={
                nameButton === "Adicionar" ? styles.add : styles.remove
              }
              onClick={() => {
                FnConfirmation();
              }}
            >
              {nameButton}
            </Modal.ActionButton>
          </div>
        </Modal.Container>
      )}
    </>
  );
}
