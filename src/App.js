import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'

import './App.scss'
import { useDispatch, useSelector } from "react-redux";
import { reqFoodList } from "./store/modules/takeaway";
import { useEffect } from "react";

const App = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(reqFoodList())
  }, [dispatch]);
  
  const {foodsList, activeIndex} = useSelector(state => state.foods)
  
  return (
    <div className="home">
      {/* 導覽 */}
      <NavBar/>
      
      {/* 內容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu/>
          
          <div className="list-content">
            <div className="goods-list">
              {/* 外送商品列表 */}
              {foodsList.map((item, index) => {
                return (
                  // 條件渲染
                  activeIndex === index && <FoodsCategory
                    key={item.tag}
                    // 清單標題
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* 購物車 */}
      <Cart/>
    </div>
  )
}

export default App