import React, { useState } from "react";
import { createContext } from "react";

export const SickContext = createContext();

export const SickProvider = (props) => {

    const [sick, setSick] = useState(0);
    const sickStates = ['very healty', 'healthy', 'little sick', 'sick', 'very sick']
    const sickState = sickStates[sick];
    const smoke = sick > 3;

    function changeSick() {
        if (sick < sickStates.length - 1) setSick(sick + 1);
    }

    return (
        <SickContext.Provider value={{ sick, setSick, sickState, changeSick, smoke }} >
            {props.children}
        </SickContext.Provider>
    );
}