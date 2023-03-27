import { configureStore, createSlice } from '@reduxjs/toolkit'


const user = createSlice({
  name: 'user',
  initialState: 'User',
  reducers:{
    changeState(state){
      return 'a'+ state
    }
  }
})

export const { changeState } = user.actions

const like = createSlice({
  name: 'like',
  initialState: [
    {id:0, name:'Don Quixote', count:1, author:"Miguel de Cervantes", language:"Spanish", sales:"500 million", genre:"Adventure Fiction", image:"https://ifh.cc/g/RJc696.jpg", date:"1605 (1st Part), 1615 (2nd Part)"},
  ], 
  reducers:{
    addCount(state, action){
      state[action.payload].count++
    },
    addItem(state, action){
      state.push(action.payload)
    }
  }
})

export const { addCount, addItem } = like.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    like : like.reducer
   }
}) 