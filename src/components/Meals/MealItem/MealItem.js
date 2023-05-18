import React, { useContext } from "react"
import styles from "./MealItem.module.css"
import Counter from "../../UI/Counter/Counter"

const MealItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={props.mealItem.img} alt="汉堡包" />
      </div>
      <div className="contentBox">
        <h3 className={styles.title}>{props.mealItem.title}</h3>
        <p className={styles.desc}>{props.mealItem.desc}</p>
        <div className={styles.priceAndCounter}>
          <div className={styles.price}>{props.mealItem.price}</div>
          <Counter mealItem={props.mealItem} />
        </div>
      </div>
    </div>
  )
}

export default MealItem
