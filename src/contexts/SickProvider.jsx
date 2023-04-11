import React, { useState } from "react";
import { createContext } from "react";

export const SickContext = createContext();

export const SickProvider = (props) => {

    const [smoke, setSmoke] = useState(0);

    function changeSmoke() {
        if (smoke <= 8) setSmoke(smoke + 1);
    }

    return (
        <SickContext.Provider value={{ smoke, changeSmoke }} >
            {props.children}
        </SickContext.Provider>
    );
}