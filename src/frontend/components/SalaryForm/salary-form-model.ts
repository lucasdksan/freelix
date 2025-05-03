"use client"

import { createFormStep } from "@/frontend/ui/form-step-ui";
import { useState } from "react";

export function salaryFormModel(){
    const [step, setStep] = useState(1);
    const handleChange = () => {};
    const nextStep = () => setStep((prev) => prev === 3 ? prev : prev++);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : prev--);
    const Form = createFormStep("default");
    
    return {
        step,
        Form,
        handleChange,
        nextStep,
        prevStep,
    };
}