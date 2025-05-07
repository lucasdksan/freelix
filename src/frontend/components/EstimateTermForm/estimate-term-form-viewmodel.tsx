"use client"

import { estimateTermFormModel } from "./estimate-term-form-model"
import { EstimateTermFormView } from "./estimate-term-form-view";

export function EstimateTermFormViewModel(){
    const model = estimateTermFormModel();

    return(
        <EstimateTermFormView 
            { ...model }
        />
    );
}