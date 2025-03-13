import { createSlice } from '@reduxjs/toolkit'
import { AddToCartActRedux } from '../../Action/Addtocart/ActionAddToCart'

const initialState = {
  addtocart: [],
}

export const AddToCartSlice = createSlice({
  name: 'addproduct',
  initialState,
  reducers: {
    AddToCartActRedux,
  },
})

// Action creators are generated for each case reducer function
export const { AddToCartActRedux: AddToCartRedux,} = AddToCartSlice.actions

export default AddToCartSlice.reducer