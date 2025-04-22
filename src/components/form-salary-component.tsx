"use client"

import { useState } from "react";
import { FormFieldsetInput } from "./form-fieldset-input-compoent";
import { calculateSalary } from "@/services/calculate-salary-service";

export function FormSalary() {
    const [step, setStep] = useState(1);
    const [finalSalary, setFinalSalary] = useState({ active: false, value: 0 });
    const [formData, setFormData] = useState({
        mouthlySalary: 0,
        benefitsValue: 0,
        workingHoursPerMonth: 160,
        freelanceMultiplier: 1.3,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: parseFloat(value),
        }));
    };
    const nextStep = () => setStep((prev) => prev === 3 ? prev : prev + 1);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : prev - 1);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFinalSalary({ active: true, value: calculateSalary(formData) });
    };
    const handleCopy = ()=> {
        navigator.clipboard.writeText(`${finalSalary.value}`)
            .then(()=> {
                alert("Valor copiado com sucesso!");
            });
    }

    return (
        <div className="flex flex-col h-full w-full items-start gap-2 justify-start">
            <h2 className="font-roboto not-italic font-normal text-lg text-white text-center">Calcular baseado em despesas</h2>
            <form className="w-full h-full" onSubmit={handleSubmit}>
                {step === 1 && (
                    <>
                        <FormFieldsetInput
                            title="Salário por mês (R$)"
                            htmlFor="mouthlySalary"
                            placeholder="3200"
                            type="number"
                            name="mouthlySalary"
                            value={formData.mouthlySalary}
                            onChange={handleChange}
                        />
                        <FormFieldsetInput
                            title="Benefícios (R$)"
                            htmlFor="benefitsValue"
                            placeholder="800"
                            type="number"
                            name="benefitsValue"
                            value={formData.benefitsValue}
                            onChange={handleChange}
                        />
                    </>
                )}
                {step === 2 && (
                    <>
                        <FormFieldsetInput
                            title="Horas de trabalho por mês"
                            htmlFor="workingHoursPerMonth"
                            placeholder="160"
                            type="number"
                            name="workingHoursPerMonth"
                            value={formData.workingHoursPerMonth}
                            onChange={handleChange}
                        />
                        <FormFieldsetInput
                            title="Multiplicador autônomo"
                            htmlFor="freelanceMultiplier"
                            placeholder="100"
                            type="number"
                            name="freelanceMultiplier"
                            value={formData.freelanceMultiplier}
                            onChange={handleChange}
                        />
                    </>
                )}
                {step === 3 && finalSalary.active && (
                    <div>
                        Seu valor hora {finalSalary.value}
                    </div>
                )}
                <div className="flex justify-between mt-3 gap-4">
                    {(step < 3) ? (
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
                            <button onClick={handleCopy} className="w-full items-center justify-center flex gap-2 px-2 py-1 rounded-lg bg-white text-btn-background cursor-pointer font-roboto not-italic font-normal text-lg text-center" type="submit">
                                Copiar
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}