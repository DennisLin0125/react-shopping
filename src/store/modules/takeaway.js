import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name:'foods',
  initialState:{
    foodsList:[]
  },
  reducers:{
    setFoodsList(state,action){
      state.foodsList = action.payload
    }
  }
})

const {setFoodsList} = foodStore.actions

const reqFoodList = () => {
  return async (dispatch) => {
    const result = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(result.data))
  }
}

export {reqFoodList}

const foodsReducer = foodStore.reducer

export default foodsReducer