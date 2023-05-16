import React, { useState } from "react"
import styles from "./Counter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const Counter = (props) => {
  const [count, setCount] = useState(0)
  const sub = () => {
    setCount((prevCount) => prevCount - 1)
  }
  const add = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div className={styles.container}>
      {count > 0 ? (
        <>
          <button className={styles.sub} onClick={sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className={styles.count}>{count}</div>
        </>
      ) : null}
      <button className={styles.add}>
        <FontAwesomeIcon icon={faPlus} onClick={add} />
      </button>
    </div>
  )
}

export default Counter
