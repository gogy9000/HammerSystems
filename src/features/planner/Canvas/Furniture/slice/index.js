import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

import { v4 } from "uuid";

export const addFurniture=createAsyncThunk("FURNITURE_SLICE/ADD_FURNITURE",({position},{dispatch})=>{
  const id=v4()
  dispatch(furnitureActions.addFurniture({position,id}))
  dispatch(furnitureActions.setSelectedFurnitureId(id))
})

export const furnitureSlice=createSlice({
  name:'FURNITURE_SLICE',
  initialState,
  reducers: {
    updateFurnitureConfig: ((state, action) => {
      state.selectedFurnitureId = action.payload.selectedFurnitureId
      state.furnitureIdList = action.payload.furnitureIdList
      state.furniture = action.payload.furniture
    }),
    addFurniture: (state, action) => {
      const id = action.payload.id;
      state.furnitureIdList.push(id);
      state.furniture[id] = { isSelected: false, rotation: [Math.PI / 2, 0, 0], ...action.payload };
    },
    removeSelectedFurniture: (state) => {
      const selectedId = state.selectedFurnitureId;
      if (!selectedId) return;
      state.selectedFurnitureId=null
      state.furnitureIdList=state.furnitureIdList.filter((id) => id !== selectedId);
      delete state.furniture[selectedId];
    },
    rotateFurniture: (state, action) => {
      const foundId = state.furnitureIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.furniture[foundId].rotation[0] += action.payload.rotation[0];
        state.furniture[foundId].rotation[1] += action.payload.rotation[1];
        state.furniture[foundId].rotation[2] += action.payload.rotation[2];
      }
    },
    setFurniturePosition: (state, action) => {
      const foundId = state.furnitureIdList.find((id) => id === action.payload.id);
      if (foundId) {
        state.furniture[foundId].position = action.payload.position;
      }
    },
    setSelectedFurnitureId: (state, action) => {

      if (state.selectedFurnitureId === action.payload) return;
      if (state.selectedFurnitureId && !!action.payload) {
        state.furniture[state.selectedFurnitureId].isSelected = false;
        state.selectedFurnitureId = action.payload;
        state.furniture[action.payload].isSelected = true;
        return;
      }
      if (!!action.payload) {
        state.selectedFurnitureId = action.payload;
        state.furniture[action.payload].isSelected = true;
        return;
      }
      if (!action.payload && state.selectedFurnitureId) {
        state.furniture[state.selectedFurnitureId].isSelected = false;
        state.selectedFurnitureId = null;
      }
    },
  }
})

export const furnitureActions=furnitureSlice.actions
export const furnitureReducer=furnitureSlice.reducer