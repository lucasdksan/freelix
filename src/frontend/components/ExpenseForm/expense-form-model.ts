"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpenseFormData, schema } from "./expense-schema";
import { calculateExpenses } from "@/frontend/services/calculate-expenses-service";
import { useState } from "react";
import { createFormStep } from "@/frontend/ui/form-step-ui";
import { createFieldsetInput } from "@/frontend/ui/fieldset-input-ui";

export function expenseFormModel() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });
    const [step, setStep] = useState(1);
    const [finalResult, setFinalResult] = useState<null | number>(null);
    const nextStep = () => setStep((prev) => prev === 5 ? prev : ++prev);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : --prev);
    const onSubmit = (data: ExpenseFormData) => {
        const newData: ExpenseFormData = {
            monthlyExpenses: Number(data.monthlyExpenses) || 0,
            desiredProfitMargin: Number(data.desiredProfitMargin) || 30,
            workingHoursPerMonth: Number(data.workingHoursPerMonth) || 160,
            softwareLicenses: Number(data.softwareLicenses) || 0,
            healthInsurance: Number(data.healthInsurance) || 0,
            accountantFees: Number(data.accountantFees) || 0,
            taxesPercentage: Number(data.taxesPercentage) || 6,
            otherExpenses: Number(data.otherExpenses) || 0,
        };

        const result = calculateExpenses(newData);

        setFinalResult(result);
    };
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
        register,
        nextStep,
        prevStep,
        onSubmit,
        handleSubmit,
    };
}