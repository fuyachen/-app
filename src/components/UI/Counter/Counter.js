import React, { useContext } from "react"
import styles from "./Counter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import CartContext from "../../store/CartContext"

const Counter = (props) => {
  const ctx = useContext(CartContext)

  const sub = () => {
    ctx.subItem(props.mealItem)
  }
  const add = () => {
    ctx.addItem(props.mealItem)
  }
  return (
    <div className={styles.container}>
      {props.mealItem.amount > 0 ? (
        <>
          <button className={styles.sub} onClick={sub}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className={styles.count}>{props.mealItem.amount}</div>
        </>
      ) : null}
      <button className={styles.add}>
        <FontAwesomeIcon icon={faPlus} onClick={add} />
      </button>
    </div>
  )
}

export default Counter
