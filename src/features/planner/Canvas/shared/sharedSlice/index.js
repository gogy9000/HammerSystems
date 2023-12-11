import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const sharedSlice=createSlice({
  name:"SHARED_SLICE",
  initialState,
  reducers:{
    toggleMode:(state,action)=>{
      state.mode=action.payload
    }
  }
})
export const sharedActions=sharedSlice.actions
export const sharedReducer=sharedSlice.reducer