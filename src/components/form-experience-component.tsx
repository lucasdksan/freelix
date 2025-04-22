"use client"

import { calculateExperience } from "@/services/calculate-experience-service";
import { useState } from "react";
import { FormFieldsetInput } from "./form-fieldset-input-compoent";
import { FormFieldsetSelect } from "./form-fieldset-select-compoent";

export function FormExperience() {
    const [step, setStep] = useState(1);
    const [finalExpenses, setFinalExpenses] = useState({ active: false, value: 0 });
    const [formData, setFormData] = useState<{
        yearsOfExperience: number;
        skillLevel: "junior" | "pleno" | "senior";
    }>({
        yearsOfExperience: 0,
        skillLevel: "junior",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "skillLevel" ? value : parseFloat(value),
        }));
    };
    const nextStep = () => setStep((prev) => prev === 2 ? prev : prev + 1);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : prev - 1);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFinalExpenses({ active: true, value: calculateExperience(formData) });
    };

    return (
        <div className="flex flex-col h-full w-full items-start gap-2 justify-start">
            <h2 className="font-roboto not-italic font-normal text-lg text-white text-center">Calcular baseado em experiência</h2>
            <form className="w-full h-full" onSubmit={handleSubmit}>
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
                            name="yearsOfExperience"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                        />
                    </>
                )}
                {step === 2 && finalExpenses.active && (
                    <div>
                        Seu valor hora {finalExpenses.value}
                    </div>
                )}
                <div className="flex justify-between mt-3 gap-4">
                    {(step < 2) ? (
                        <>
                            <button
                                type="button"
                                onClick={prevStep}
                                className="disabled:bg-[#dee2e6] w-full items-center justify-center flex gap-2 px-2 py-1 rounded-lg bg-white text-btn-background cursor-pointer font-roboto not-italic font-normal text-lg text-center"
                                disabled={step === 1}
                            >
                                Voltar
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-full items-center justify-center flex gap-2 px-2 py-1 rounded-lg bg-white text-btn-background cursor-pointer font-roboto not-italic font-normal text-lg text-center"
                            >
                                Próximo
                            </button></>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={prevStep}
                                className="w-full items-center justify-center flex gap-2 px-2 py-1 rounded-lg bg-white text-btn-background cursor-pointer font-roboto not-italic font-normal text-lg text-center"
                            >
                                Voltar
                            </button>
                            <button className="w-full items-center justify-center flex gap-2 px-2 py-1 rounded-lg bg-white text-btn-background cursor-pointer font-roboto not-italic font-normal text-lg text-center" type="submit">
                                Gerar Arquivos
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}