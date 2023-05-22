import React, { useContext } from "react"
import styles from "./Cart.module.css"
import iconImg from "../../asset/bag.png"
import CartContext from "../store/CartContext"

const Cart = () => {
  const ctx = useContext(CartContext)
  return (
    <div className={styles.cart}>
      <div className={styles.icon}>
        <img src={iconImg} alt="购物车" />
        {ctx.sum !== 0 && (
          <div className={styles.amount}>{ctx.totalAmount}</div>
        )}
      </div>
      {ctx.sum !== 0 ? (
        <div className={styles.sum}>{ctx.sum}</div>
      ) : (
        <div className={styles.none}>未选购商品</div>
      )}
      <button className={styles.checkout}>去结算</button>
    </div>
  )
}

export default Cart
