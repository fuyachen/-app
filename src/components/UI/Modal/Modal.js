import React from "react"
import styles from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"

const Modal = (props) => {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }
  return (
    <Backdrop className={styles.modalBackdrop} onClick={stopPropagation}>
      <div className={styles.modal}>
        <div className={styles.content}>{props.modalContent}</div>
        <div className={styles.choice}>
          <button className={styles.cancle} onClick={props.onCancle}>
            取消
          </button>
          <button className={styles.confirm} onClick={props.onConfirm}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  )
}

export default Modal
