"use client"

import generateFileModel from "./generate-file-model";
import GenerateFileView from "./generate-file-view";
import { EstimateTermFormData } from "../EstimateTermForm/estimate-term-schema";

type GenerateFileViewModelProps = EstimateTermFormData & {
    valueNumeric: string;
    months: string;
};

export default function GenerateFileViewModel(props: GenerateFileViewModelProps){ 
    const model = generateFileModel({ ...props });

    return (
        <GenerateFileView 
            { ...model }
        />
    );
}