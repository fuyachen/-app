import React from "react"
import styles from "./Counter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const Counter = () => {
  return (
    <div className={styles.container}>
      <button className={styles.sub}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <div className={styles.count}>1</div>
      <button className={styles.add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}

export default Counter
