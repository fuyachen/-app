import React from "react"
import styles from "./MealItem.module.css"
import Counter from "../../UI/Counter/Counter"

const MealItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src="/img/meals/1.png" alt="汉堡包" />
      </div>
      <div className="contentBox">
        <h3 className={styles.title}>吉士汉堡</h3>
        <p className={styles.desc}>
          百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！
        </p>
        <div className={styles.priceAndCounter}>
          <div className={styles.price}>12</div>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default MealItem
