import React, {memo} from "react";
import styles from './planner.module.css'
import {CanvasBlock} from "./Canvas";


const Planner = memo(() => {

    return (
        <div className={styles.container}>
            <CanvasBlock/>
        </div>
    );
});

export default Planner

