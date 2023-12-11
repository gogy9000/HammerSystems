
export const selectFurnitureIdList = (state) => state.furnitureReducer.furnitureIdList;
export const selectFurnitureById = (id) => (state) => state.furnitureReducer.furniture[id]||null;
export const selectSelectedFurniture = (state) => {
  const id = state.furnitureReducer.selectedFurnitureId;
  return id ? state.furnitureReducer.furniture[id] : null;
};