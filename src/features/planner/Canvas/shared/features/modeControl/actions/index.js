import { createAsyncThunk } from "@reduxjs/toolkit";
import { sharedActions } from "../../../sharedSlice";

export const toggleMode = createAsyncThunk
("toggleMode", async (payload, { dispatch }) => {
  dispatch(sharedActions.toggleMode(payload));
});