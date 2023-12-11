import {createAsyncThunk} from "@reduxjs/toolkit";
import {constructionsActions} from "../../../../Constructions/slice";
import {furnitureActions, furnitureReducer} from "../../../../Furniture/slice";

export const saveConfig = createAsyncThunk
('SAVE_CONFIG', async (v, {getState, rejectWithValue}) => {
    try {
        const constructionReducer = {
            wallsIdList: getState().constructionReducer.wallsIdList,
            walls: getState().constructionReducer.walls,
            selectedConstructionId: getState().selectedConstructionId
        }
        const furnitureReducer = {
            furnitureIdList: getState().furnitureReducer.furnitureIdList,
            furniture: getState().furnitureReducer.furniture
        }
        const config = {
            constructionReducer,
            furnitureReducer
        }
        const time=`${new Date().toLocaleDateString()},${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`
        const jsonData = JSON.stringify(config);
        const blob = new Blob([jsonData], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `3D_planner_config(${time}).json`;
        link.click();
        URL.revokeObjectURL(url);
    } catch (e) {
        return rejectWithValue(e)
    }
})
export const loadConfig = createAsyncThunk('LOAD_CONFIG', async (selectedFile, {dispatch}) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const fileContent = e.target.result;
        const parseFileContent = JSON.parse(String(fileContent))
        if (!!parseFileContent.constructionReducer) {
            dispatch(constructionsActions.updateWallConfig(parseFileContent.constructionReducer))
        }
        if (!!parseFileContent.furnitureReducer) {
            dispatch(furnitureActions.updateFurnitureConfig(parseFileContent.furnitureReducer))
        }
    };
    reader.readAsText(selectedFile);
})