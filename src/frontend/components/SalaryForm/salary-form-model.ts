"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createFormStep } from "@/frontend/ui/form-step-ui";
import { createFieldsetInput } from "@/frontend/ui/fieldset-input-ui";
import { calculateSalary } from "@/frontend/services/calculate-salary-service";
import { SalaryFormData, schema } from "./salary-schema";

export function salaryFormModel() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SalaryFormData>({
        resolver: zodResolver(schema),
    });
    const [step, setStep] = useState(1);
    const [finalResult, setFinalResult] = useState<null | number>(null);
    const nextStep = () => setStep((prev) => prev === 3 ? prev : ++prev);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : --prev);
    const onSubmit = (data: SalaryFormData) => {
        const result = calculateSalary(data);

        setFinalResult(result);
    }
    const Form = createFormStep("default");
    const Input = createFieldsetInput("default", {
        inputClass: "p-2 border-2 rounded-lg text-white text-start",
        fieldsetClass: "flex flex-col items-start justify-center gap-2 mb-2",
        labelClass: "text-base text-white text-center",
    });

    return {
        step,
        errors,
        finalResult,
        Form,
        Input,
        onSubmit,
        register,
        nextStep,
        prevStep,
        handleSubmit,
    };
}