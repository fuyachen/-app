import Meals from "./components/Meals/Meals"
import { useState, useContext } from "react"
import CartContext from "./components/store/CartContext"

// 模拟一组食物数据
const MEALS_DATA = [
  {
    id: "1",
    title: "汉堡包",
    desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
    price: 12,
    img: "/img/meals/1.png",
    amount: 0,
  },
  {
    id: "2",
    title: "双层吉士汉堡",
    desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
    price: 20,
    img: "/img/meals/2.png",
    amount: 0,
  },
  {
    id: "3",
    title: "巨无霸",
    desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
    price: 24,
    img: "/img/meals/3.png",
    amount: 0,
  },
  {
    id: "4",
    title: "麦辣鸡腿汉堡",
    desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
    price: 21,
    img: "/img/meals/4.png",
    amount: 0,
  },
  {
    id: "5",
    title: "板烧鸡腿堡",
    desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
    price: 22,
    img: "/img/meals/5.png",
    amount: 0,
  },
  {
    id: "6",
    title: "麦香鸡",
    desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
    price: 14,
    img: "/img/meals/6.png",
    amount: 0,
  },
  {
    id: "7",
    title: "吉士汉堡包",
    desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
    price: 12,
    img: "/img/meals/7.png",
    amount: 0,
  },
]

const App = () => {
  const [mealsData, setMealsData] = useState(MEALS_DATA)
  // 将context中的数据设为双向绑定数据
  const cartCtx = useContext(CartContext)
  const [CartData, setCartData] = useState(cartCtx)
  // 增加商品数量
  const addItem = (mealItem) => {
    const newCart = { ...CartData }
    // 检查购物车中是否已经有该餐品
    const index = newCart.items.indexOf(mealItem)
    // 无，添加数据到购物车列表
    if (index === -1) {
      newCart.items.push(mealItem)
    }
    // 有，更改商品数量
    mealItem.amount += 1
    newCart.totalAmount += 1
    newCart.sum += mealItem.price
    setCartData(newCart)
  }

  // 减少商品数量
  const subItem = (mealItem) => {
    const newCart = { ...CartData }
    mealItem.amount -= 1
    // 商品数量为1，从购物车中移除商品
    if (mealItem.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(mealItem), 1)
    }
    newCart.totalAmount -= 1
    newCart.sum -= mealItem.price
    setCartData(newCart)
  }

  return (
    <div style={{ width: "750rem" }}>
      <CartContext.Provider value={{ ...CartData, addItem, subItem }}>
        <Meals mealsData={mealsData} />
      </CartContext.Provider>
    </div>
  )
}

export default App
