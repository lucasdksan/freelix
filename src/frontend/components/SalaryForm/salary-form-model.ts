"use client"

import { createFormStep } from "@/frontend/ui/form-step-ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SalaryFormData, schema } from "./salary-schema";
import { createFieldsetInput } from "@/frontend/ui/fieldset-input-ui";
import { calculateSalary } from "@/frontend/services/calculate-salary-service";

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
    const Input = createFieldsetInput("default");

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