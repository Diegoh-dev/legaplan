import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "./modal";
import styles from "./styleModal.module.scss";
interface Props {
  open: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  title: "Nova tarefa" | "Deletar tarefa";
  isDelete: boolean;
  nameButton:'Adicionar' | 'Deletar';
}
export function ModalComponent({
  open,
  setOpenModal,
  title,
  isDelete = false,
  nameButton,
}: Props) {
  return (
    <>
      {open && (
        <Modal.Container>
          <Modal.TitleComponents title={title} />
          <Modal.ContentComponent>
            {isDelete ? (
              <Modal.MessageComponent message="Tem certeza que você deseja deletar essa tarefa?" />
            ) : (
              <div className={styles.containerInputs}>
                <label htmlFor="titulo">Título</label>
                <input type="text" id="titulo" placeholder="Digite" />
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
            <Modal.ActionButton className={ nameButton === 'Adicionar' ? styles.add : styles.remove}>
              {nameButton}
            </Modal.ActionButton>
          </div>
        </Modal.Container>
      )}
    </>
  );
}
