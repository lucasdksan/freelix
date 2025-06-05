"use client"

import { useState } from "react";
import generateFileModel from "./generate-file-model";
import GenerateFileView from "./generate-file-view";

type GenerateFileViewModelProps = {
    valueNumeric: number;
    months: number;
}

export default function GenerateFileViewModel({ months, valueNumeric }: GenerateFileViewModelProps){ 
    const [loading, setLoading] = useState(false);
    const model = generateFileModel({ months, valueNumeric, setLoading });

    return (
        <GenerateFileView 
            { ...model }
        />
    );
}