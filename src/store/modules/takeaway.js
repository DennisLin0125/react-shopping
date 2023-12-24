import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name:'foods',
  initialState:{
    // 商品列表
    foodsList:[],
    // 菜單激活
    activeIndex:0
  },
  reducers:{
    setFoodsList(state,action){
      state.foodsList = action.payload
    },
    changeActiveIndex(state,action){
      state.activeIndex = action.payload
    }
  }
})

const {
  setFoodsList,
  changeActiveIndex,
} = foodStore.actions

const reqFoodList = () => {
  return async (dispatch) => {
    const result = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(result.data))
  }
}

export {reqFoodList,changeActiveIndex}

const foodsReducer = foodStore.reducer

export default foodsReducer