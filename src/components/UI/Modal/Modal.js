import React from "react"
import styles from "./Modal.module.css"
import Backdrop from "../Backdrop/Backdrop"

const Modal = (props) => {
  return (
    <Backdrop className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.content}>确认清空{props.modalContent}</div>
        <div className={styles.choice}>
          <button className={styles.cancle} onClick={props.onCancle}>
            取消
          </button>
          <button className={styles.confirm} nClick={props.onConfirm}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  )
}

export default Modal
