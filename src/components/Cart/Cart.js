import React, { useContext, useState, useEffect } from "react"
import styles from "./Cart.module.css"
import iconImg from "../../asset/bag.png"
import CartContext from "../store/CartContext"
import CartDetail from "./CartDetail/CartDetail"
import Checkout from "./Checkout/Checkout"

const Cart = () => {
  const ctx = useContext(CartContext)
  const [isShow, setIsShow] = useState(false)
  const toggleCartDetail = () => {
    setIsShow((prevState) => !prevState)
  }
  const [showCheckout, setShowCheckout] = useState(false)
  const checkout = () => {
    setShowCheckout(true)
  }
  const hideCheckout = () => {
    setShowCheckout(false)
  }
  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setIsShow(false)
      setShowCheckout(false)
    }
  }, [ctx])
  return (
    <div className={styles.cart} onClick={toggleCartDetail}>
      {/* 结算页面 */}
      {showCheckout && <Checkout onHide={hideCheckout} />}
      {isShow && <CartDetail></CartDetail>}
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
      <button className={styles.checkout} onClick={checkout}>
        去结算
      </button>
    </div>
  )
}

export default Cart
