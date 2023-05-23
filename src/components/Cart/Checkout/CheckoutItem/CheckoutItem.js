import React from "react"
import classes from "./CheckoutItem.module.css"
import Counter from "../../../UI/Counter/Counter"

const CheckoutItem = (props) => {
  return (
    <div className={classes.CheckoutItem}>
      <div className={classes.MealImg}>
        <img src={props.mealItem.img} />
      </div>
      <div className={classes.Desc}>
        <h2 className={classes.Title}>{props.mealItem.title}</h2>
        <div className={classes.PriceOuter}>
          <Counter mealItem={props.mealItem} />
          <div className={classes.Price}>
            {props.mealItem.price * props.mealItem.amount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
