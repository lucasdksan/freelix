"use client"

import { calculateExperience } from "@/services/calculate-experience-service";
import { useState } from "react";
import { FormSteps } from "../Form/form-steps-component";
import { FormFieldsetSelect } from "../Form/form-fieldset-select-compoent";
import { FormFieldsetInput } from "../Form/form-fieldset-input-compoent";

export function ExperienceProcess() {
    const [step, setStep] = useState(1);
    const [finalExperience, setFinalExperience] = useState({ active: false, value: 0 });
    const [formData, setFormData] = useState<{
        yearsOfExperience: number;
        skillLevel: "junior" | "pleno" | "senior";
        certificationsCount: number;
        specializationArea: "tech" | "design" | "business" | "marketing";
    }>({
        yearsOfExperience: 0,
        skillLevel: "junior",
        certificationsCount: 0,
        specializationArea: "tech"
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "skillLevel" || name === "specializationArea" ? value : parseFloat(value),
        }));
    };
    const nextStep = () => setStep((prev) => prev === 3 ? prev : prev + 1);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : prev - 1);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFinalExperience({ active: true, value: calculateExperience(formData) });
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(`${finalExperience.value}`)
            .then(() => {
                alert("Valor copiado com sucesso!");
            });
    }

    return (
        <FormSteps
            titleLastButton="Copiar"
            titleForm="Calcular baseado em experiência"
            maxQuantity={3}
            handleLastBtn={handleCopy}
            handleSubmit={handleSubmit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
        >
            {step === 1 && (
                <>
                    <FormFieldsetSelect
                        title="Senioriadade (junior, pleno ou senior)"
                        htmlFor="skillLevel"
                        placeholder="junior"
                        type="text"
                        name="skillLevel"
                        value={formData.skillLevel}
                        items={[{ title: "Junior", value: "junior" }, { title: "Pleno", value: "pleno" }, { title: "Sênior", value: "senior" }]}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Anos de experiência (2)"
                        htmlFor="yearsOfExperience"
                        placeholder="2"
                        type="number"
                        min={1}
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 2 && (
                <>
                    <FormFieldsetInput
                        title="Certificações relevantes"
                        htmlFor="certificationsCount"
                        placeholder="2"
                        type="number"
                        min={0}
                        name="certificationsCount"
                        value={formData.certificationsCount}
                        onChange={handleChange}
                    />
                    <FormFieldsetSelect
                        title="Área de especialização"
                        htmlFor="specializationArea"
                        placeholder="Tech"
                        type="text"
                        name="specializationArea"
                        value={formData.specializationArea}
                        items={[{ title: "Tech", value: "tech" }, { title: "Design", value: "design" }, { title: "Business", value: "business" }, { title: "Marketing", value: "marketing" }]}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 3 && finalExperience.active && (
                <div>
                    Seu valor hora {finalExperience.value}
                </div>
            )}
        </FormSteps>
    );
}