"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createFormStep } from "@/frontend/ui/form-step-ui";
import { createFieldsetInput } from "@/frontend/ui/fieldset-input-ui";
import { calculateExperience } from "@/frontend/services/calculate-experience-service";
import { ExperienceFormData, schema } from "./experience-schema";
import { createFieldsetSelect } from "@/frontend/ui/fieldset-select-ui";

export function experienceFormModel() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ExperienceFormData>({
        resolver: zodResolver(schema),
    });
    const [step, setStep] = useState(1);
    const [finalResult, setFinalResult] = useState<null | number>(null);
    const nextStep = () => setStep((prev) => prev === 4 ? prev : ++prev);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : --prev);
    const onSubmit = (data: ExperienceFormData) => {
        const result = calculateExperience(data);

        setFinalResult(result);
    }
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
    const specializationAreaList = [
        { title: "Tech", value: "tech" },
        { title: "Design", value: "design" },
        { title: "Business", value: "business" },
        { title: "Marketing", value: "marketing" }
    ];
    const skillLevelList = [
        { title: "Junior", value: "junior" },
        { title: "Pleno", value: "pleno" },
        { title: "Sênior", value: "senior" },
    ];

    return {
        step,
        errors,
        finalResult,
        skillLevelList,
        specializationAreaList,
        Form,
        Input,
        Select,
        onSubmit,
        register,
        nextStep,
        prevStep,
        handleSubmit,
    };
}