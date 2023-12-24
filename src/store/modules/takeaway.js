import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    // 商品列表
    foodsList: [],
    // 菜單激活
    activeIndex: 0,
    // 購物車列表
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    addCart(state, action) {
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    }
  }
})

const {
  setFoodsList,
  changeActiveIndex,
  addCart,
} = foodStore.actions

const reqFoodList = () => {
  return async (dispatch) => {
    const result = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(result.data))
  }
}

export { reqFoodList, changeActiveIndex, addCart }

const foodsReducer = foodStore.reducer

export default foodsReducer