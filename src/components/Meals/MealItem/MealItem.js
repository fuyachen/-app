import React from "react"
import styles from "./MealItem.module.css"
import Counter from "../../UI/Counter/Counter"

const MealItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={props.img} alt="汉堡包" />
      </div>
      <div className="contentBox">
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.desc}>{props.desc}</p>
        <div className={styles.priceAndCounter}>
          <div className={styles.price}>{props.price}</div>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default MealItem
