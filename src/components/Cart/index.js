import classNames from 'classnames'
import Count from '../Count'
import './index.scss'

const Cart = () => {
  const cart = []
  return (
    <div className="cartContainer">
      {/* 遮罩層 新增visible類別名稱可以顯示出來 */}
      <div
        className={classNames('cartOverlay')}
      />
      <div className="cart">
        {/* fill 新增fill類別名稱可以切換購物車狀態*/}
        {/* 購物車數量 */}
        <div className={classNames('icon')}>
          {true && <div className="cartCornerMark">{0}</div>}
        </div>
        {/* 購物車價格 */}
        <div className="main">
          <div className="price">
             <span className="payableAmount">
               <span className="payableAmountUnit">¥</span>
               {0.00}
             </span>
          </div>
          <span className="text">預估另需配送費 ¥5</span>
        </div>
        {/* 結算 or 起送 */}
        {false ? (
          <div className="goToPreview">去結算</div>
        ) : (
          <div className="minFee">¥20起送</div>
        )}
      </div>
      {/* 新增visible類別名稱 div會顯示出來 */}
      <div className={classNames('cartPanel')}>
        <div className="header">
          <span className="text">購物車</span>
          <span className="clearCart">
             清空購物車
           </span>
        </div>
        
        {/* 購物車清單 */}
        <div className="scrollArea">
          {cart.map(item => {
            return (
              <div className="cartItem" key={item.id}>
                <img className="shopPic" src={item.picture} alt="" />
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