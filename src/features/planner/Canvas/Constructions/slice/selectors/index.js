
export const selectConstructionMode = (state) => state.constructionReducer.constructionMode;
export const selectWallsIdList = (state) => state.constructionReducer.wallsIdList;
export const selectWall = (id) => (state) => state.constructionReducer.walls[id]||null;
export const selectConstruction = (state) => {
  const id = state.constructionReducer.selectedConstructionId;
  return id ? state.constructionReducer.walls[id] : null;
};