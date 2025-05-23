"use client"

import { createButton } from "@/frontend/ui/button-ui";
import { useState } from "react";
import { EstimateTermFormViewModel } from "../EstimateTermForm/estimate-term-form-viewmodel";
import { TimeLogicViewModel } from "../TimeLogic/time-logic-viewmodel";

export function appLogicModel() {
    const [kindOfProcess, setKindOfProcess] = useState<"term" | "time" | null>(null);
    const styleStrategies = {
        "term": EstimateTermFormViewModel,
        "time": TimeLogicViewModel
    };
    const handleChageTypeProcess = (value: "term" | "time") => setKindOfProcess(value);
    const handleBackToStart = () => setKindOfProcess(null);
    const Button = createButton("default", "bg-btn-background gap-3 p-2 rounded-lg text-black");
    
    return {
        kindOfProcess,
        styleStrategies,
        Button,
        handleBackToStart,
        handleChageTypeProcess
    };
}