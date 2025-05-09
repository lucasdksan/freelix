"use client"

import { createButton } from "@/frontend/ui/button-ui";
import { SalaryFormViewModel } from "../SalaryForm/salary-form-viewmodel";
import { useState } from "react";
import { ExpenseFormViewModel } from "../ExpenseForm/expense-form-viewmodel";
import { ExperienceFormViewModel } from "../ExperienceForm/experience-form-viewmodel";

type TimeLogicModelProps = {
    comeBack: () => void;
}

export function timeLogicModel({ comeBack }: TimeLogicModelProps) {
    const [kindOfProcess, setKindOfProcess] = useState<"salary" | "expense" | "experience" | null>(null);
    const styleStrategies = {
        "salary": SalaryFormViewModel,
        "expense": ExpenseFormViewModel,
        "experience": ExperienceFormViewModel
    };
    const handleChageTypeProcess = (value: "salary" | "expense" | "experience") => setKindOfProcess(value);
    const handleComeBack = () => {
        if(kindOfProcess) setKindOfProcess(null);
        else comeBack();
    }
    const Button = createButton("default", "bg-btn-background gap-3 p-2 rounded-lg text-black");
    const ComeBackButton = createButton("default", "fixed right-10 top-3");

    return{
        kindOfProcess,
        styleStrategies,
        Button,
        ComeBackButton,
        handleComeBack,
        handleChageTypeProcess
    };
}