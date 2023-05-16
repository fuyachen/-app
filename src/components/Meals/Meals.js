import React from "react"
import styles from "./Meals.module.css"
import MealItem from "./MealItem/MealItem"

const Meals = () => {
  return (
    <div className={styles.container}>
      <MealItem />
    </div>
  )
}

export default Meals
