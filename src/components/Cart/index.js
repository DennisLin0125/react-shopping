import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import { useDispatch, useSelector } from "react-redux";
import { upCount, downCount, clearCar } from "../../store/modules/takeaway";
import { useState } from "react";

const Cart = () => {
  const {cartList} = useSelector(state => state.foods)
  
  // 計算總價
  const totalPrice = cartList.reduce((a, c) => a + c.price * c.count, 0)
  
  const dispatch = useDispatch()
  
  const [visible,setVisible] = useState(false)
  
  const onShow = () => {
    if (cartList.length > 0) {
      setVisible(true)
    }
  }
  
  return (
    <div className="cartContainer">
      {/* 遮罩層 新增visible類別名稱可以顯示出來 */}
      <div
        className={classNames('cartOverlay', visible && 'visible')}
        onClick={()=>setVisible(false)}
      />
      <div className="cart">
        {/* fill 新增fill類別名稱可以切換購物車狀態*/}
        {/* 購物車數量 */}
        <div onClick={onShow} className={classNames('icon', cartList.length > 0 && 'fill')}>
          {cartList.length > 0 && <div className="cartCornerMark">{cartList.length}</div>}
        </div>
        {/* 購物車價格 */}
        <div className="main">
          <div className="price">
             <span className="payableAmount">
               <span className="payableAmountUnit">¥</span>
               {totalPrice.toFixed(2)}
             </span>
          </div>
          <span className="text">預估另需配送費 ¥5</span>
        </div>
        {/* 結算 or 起送 */}
        {cartList.length > 0 ? (
          <div className="goToPreview">去結算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 新增visible類別名稱 div會顯示出來 */}
      <div className={classNames('cartPanel', visible && 'visible')}>
        <div className="header">
          <span className="text">購物車</span>
          <span className="clearCart" onClick={()=>dispatch(clearCar())}>
             清空購物車
           </span>
        </div>
        
        {/* 購物車清單 */}
        <div className="scrollArea">
          {cartList.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt=""/>
                <div className="main">
                  <div className="skuInfo">
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="payableAmount">
                    <span className="yuan">¥</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="skuBtnWrapper btnGroup">
                  <Count
                    count={item.count}
                    onPlus={() => dispatch(upCount({id: item.id}))}
                    onMinus={() => dispatch(downCount({id: item.id}))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart