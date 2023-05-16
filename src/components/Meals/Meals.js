import React from "react"
import styles from "./Meals.module.css"
import MealItem from "./MealItem/MealItem"

const Meals = (props) => {
  return (
    <div className={styles.container}>
      {props.mealsData.map((e) => (
        <MealItem
          key={e.id}
          title={e.title}
          desc={e.desc}
          price={e.price}
          img={e.img}
        />
      ))}
    </div>
  )
}

export default Meals
