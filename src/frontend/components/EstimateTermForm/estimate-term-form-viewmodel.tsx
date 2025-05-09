"use client"

import { estimateTermFormModel } from "./estimate-term-form-model"
import { EstimateTermFormView } from "./estimate-term-form-view";

type EstimateTermFormViewModelProps = {
    comeBack: () => void;
};

export function EstimateTermFormViewModel({ comeBack }: EstimateTermFormViewModelProps){
    const model = estimateTermFormModel();

    return(
        <EstimateTermFormView
            handleComeBack={comeBack} 
            { ...model }
        />
    );
}