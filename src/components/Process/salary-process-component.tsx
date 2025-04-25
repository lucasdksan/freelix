"use client"

import { useState } from "react";
import { calculateSalary } from "@/services/calculate-salary-service";
import { FormSteps } from "../Form/form-steps-component";
import { FormFieldsetInput } from "../Form/form-fieldset-input-compoent";

export function SalaryProcess() {
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
    const handleCopy = () => {
        navigator.clipboard.writeText(`${finalSalary.value}`)
            .then(() => {
                alert("Valor copiado com sucesso!");
            });
    }

    return (
        <FormSteps
            titleLastButton="Copiar"
            titleForm="Calcular baseado em Salário"
            step={step}
            maxQuantity={3}
            prevStep={prevStep}
            nextStep={nextStep}
            handleLastBtn={handleCopy}
            handleSubmit={handleSubmit}
        >
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
        </FormSteps>
    );
}