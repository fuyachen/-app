import React, { useContext } from "react"
import styles from "./CartDetail.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import MealItem from "../../Meals/MealItem/MealItem"
import CartContext from "../../store/CartContext"

const CartDetail = () => {
  const ctx = useContext(CartContext)
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <Backdrop>
      <div className={styles.cartDetail} onClick={stopPropagation}>
        <header>
          <p>餐品详情</p>
          <div className={styles.clear}>
            <FontAwesomeIcon icon={faTrash} className={styles.icon} />
            清空购物车
          </div>
        </header>
        <div className={styles.MealList}>
          {ctx.items.map((item) => (
            <MealItem key={item.id} mealItem={item} noDesc={true} />
          ))}
        </div>
      </div>
    </Backdrop>
  )
}

export default CartDetail
