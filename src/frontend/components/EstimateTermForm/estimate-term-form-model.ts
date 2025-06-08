"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EstimateTermFormData, schema } from "./estimate-term-schema";
import { estimateTermValue } from "@/frontend/services/estimate-term-value-service";
import { createFormStep } from "@/frontend/ui/form-step-ui";
import { createFieldsetInput } from "@/frontend/ui/fieldset-input-ui";
import { createFieldsetSelect } from "@/frontend/ui/fieldset-select-ui";
import { createButton } from "@/frontend/ui/button-ui";
import { createFieldsetTextArea } from "@/frontend/ui/fieldset-textarea-ui";

type FinalResultState = ReturnType<typeof estimateTermValue>;

export function estimateTermFormModel() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        resolver: zodResolver(schema),
    });
    const [step, setStep] = useState(1);
    const [finalResult, setFinalResult] = useState<null | FinalResultState>(null);
    const nextStep = () => setStep((prev) => prev === 10 ? prev : ++prev);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : --prev);
    const onSubmit = (data: EstimateTermFormData) => {
        const result = estimateTermValue(data);

        setFinalResult(result);
    }
    const Button = createButton("modalBtn", "disabled:bg-[#dee2e6] items-center justify-center gap-2 px-2 py-1 bg-white text-black text-lg text-center");
    const Form = createFormStep("default");
    const Input = createFieldsetInput("default", {
        inputClass: "p-2 border-2 rounded-lg text-white text-start",
        fieldsetClass: "flex flex-col items-start justify-center gap-2 mb-2",
        labelClass: "text-base text-white text-center",
    });
    const Select = createFieldsetSelect("default", {
        selectClass: "p-2 border-2 h-11 rounded-lg text-white text-start",
        fieldsetClass: "flex flex-col items-start justify-center gap-2 mb-2",
        labelClass: "text-base text-white text-center",
    });
    const Textarea = createFieldsetTextArea("default", {
        textAreaClass: "p-2 border-2 min-h-[100px] rounded-lg text-white text-start",
        fieldsetClass: "flex flex-col items-start justify-center gap-2 mb-2",
        labelClass: "text-base text-white text-center",
    });
    const ComeBackButton = createButton("default", "fixed right-10 top-3");
    const seniorityList = [
        { title: "Junior", value: "junior" },
        { title: "Pleno", value: "pleno" },
        { title: "Sênior", value: "senior" }
    ];
    const complexityList = [
        { title: "Baixa", value: "low" }, 
        { title: "Média", value: "mid" },
        { title: "Alta", value: "high" }
    ];

    return {
        step,
        errors,
        finalResult,
        seniorityList,
        complexityList,
        Form,
        Input,
        Button,
        Select,
        Textarea,
        nextStep,
        prevStep,
        onSubmit,
        register,
        getValues,
        ComeBackButton,
        handleSubmit,
    };
}