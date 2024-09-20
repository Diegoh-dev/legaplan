import Image from "next/image";
import styles from "./card.module.scss";
import { useState } from "react";
import { ModalComponent } from "../Modal/ModalComponent";
export function Card() {

  const [openModal,setOpenModal] = useState(false);
  return (
    <>
    {/* colocar uma posição relativa a  ModalComponent*/}
     {openModal && (
        <>
          <div className={styles.overlay}></div>
          <ModalComponent 
          open={openModal} 
          setOpenModal={setOpenModal}
           title="Deletar tarefa" 
           isDelete={true}
           nameButton="Deletar"
           />
        </>
      )}
    <div className={styles.card}>
        <div className={styles.input}>
        <input type="checkbox" />
        <span>Lavar as mãos</span>
        </div>
        <button onClick={() => setOpenModal(true)}>

      <Image src='/assets/trash.png' width={24} height={24} alt="logomark"/>
        </button>
    </div>
    </>
  );
}
