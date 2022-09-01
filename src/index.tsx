import React from "react";
import { createRoot } from "react-dom/client";
import { RandomComponent } from "./randomComponent";
import classes from "./global.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <div className={classes.title}>
        <span>Módulo 3 - Bundling (Opcional)</span>
    </div>  
    <RandomComponent />
    </div>
);

