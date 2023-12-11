import React, {memo, useMemo, Suspense, useRef} from "react";
import { selectFurnitureIdList } from "./slice/selectors";
import { TableAndChairs } from "./TableAndChairs";
import {useSelector} from "react-redux";

export const Furniture = memo(() => {
  const furnitureIdList=useSelector(selectFurnitureIdList)

  const mappedFurniture =
    useMemo(() => {
      return (
        furnitureIdList.map(
          (id) =>
            <Suspense key={id} fallback={null}>
              <TableAndChairs id={id}   key={id}/>
            </Suspense>

        )
      );
    }, [furnitureIdList]);


  return (
   <>{mappedFurniture}</>
  );
});
