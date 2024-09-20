import Image from "next/image";
import styles from "./card.module.scss";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpenModalDelete: Dispatch<SetStateAction<boolean>>;
}
export function Card({setOpenModalDelete}:Props) {

  return (
    <>
    <div className={styles.card}>
        <div className={styles.input}>
        <input type="checkbox" />
        <span>Lavar as mãos</span>
        </div>
        <button onClick={() => setOpenModalDelete(true)}>

      <Image src='/assets/trash.png' width={24} height={24} alt="logomark"/>
        </button>
    </div>
    </>
  );
}
