import React, { memo, useMemo,Suspense } from "react";
import { selectConstruction, selectWallsIdList } from "./slice/selectors";
import { Wall } from "./Wall";
import { Controls } from "./Controls";
import { selectMode } from "../shared/sharedSlice/selectors";
import {useSelector} from "react-redux";

export const Constructions = memo(() => {
    const wallsIdList = useSelector(selectWallsIdList);
    const mode=useSelector(selectMode)
  const selectedConstruction = useSelector(selectConstruction);

    const mappedWalls =
      useMemo(() => {
        return (
          wallsIdList.map(
            (id) =>
              <Wall id={id} key={id}/>
          )
        );
      }, [wallsIdList]);

    return (
      <>
        <Suspense fallback={null}>
        {mappedWalls}
        </Suspense>
        {mode==='construction'&&selectedConstruction?<Controls/>:null}
      </>
    );
  })
;