"use client"

import { calculateExpenses } from "@/services/calculate-expenses-service";
import { useState } from "react";
import { FormSteps } from "../Form/form-steps-component";
import { FormFieldsetInput } from "../Form/form-fieldset-input-compoent";

export function ExpenseProcess() {
    const [step, setStep] = useState(1);
    const [finalExpenses, setFinalExpenses] = useState({ active: false, value: 0 });
    const [formData, setFormData] = useState({
        monthlyExpenses: 0,
        desiredProfitMargin: 30,
        workingHoursPerMonth: 160,
        softwareLicenses: 0,
        healthInsurance: 0,
        accountantFees: 0,
        taxesPercentage: 2,
        otherExpenses: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: parseFloat(value),
        }));
    };
    const nextStep = () => setStep((prev) => prev === 5 ? prev : prev + 1);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : prev - 1);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setFinalExpenses({ active: true, value: calculateExpenses(formData) });
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(`${finalExpenses.value}`)
            .then(() => {
                alert("Valor copiado com sucesso!");
            });
    }

    return (
        <FormSteps
            handleLastBtn={handleCopy}
            handleSubmit={handleSubmit}
            maxQuantity={5}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            titleLastButton="Copiar"
            titleForm="Calcular baseado em despesas"
        >
            {step === 1 && (
                <>
                    <FormFieldsetInput
                        title="Despesas Mensais (R$)"
                        htmlFor="monthlyExpenses"
                        placeholder="3200"
                        type="number"
                        name="monthlyExpenses"
                        value={formData.monthlyExpenses}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Margem de Lucro Desejada (%)"
                        htmlFor="desiredProfitMargin"
                        placeholder="30"
                        type="number"
                        name="desiredProfitMargin"
                        value={formData.desiredProfitMargin}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 2 && (
                <>
                    <FormFieldsetInput
                        title="Horas Trabalhadas por Mês"
                        htmlFor="workingHoursPerMonth"
                        placeholder="160"
                        type="number"
                        name="workingHoursPerMonth"
                        value={formData.workingHoursPerMonth}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Licenças de Software (R$)"
                        htmlFor="softwareLicenses"
                        placeholder="100"
                        type="number"
                        name="softwareLicenses"
                        value={formData.softwareLicenses}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 3 && (
                <>
                    <FormFieldsetInput
                        title="Plano de Saúde (R$)"
                        htmlFor="healthInsurance"
                        placeholder="100"
                        type="number"
                        name="healthInsurance"
                        value={formData.healthInsurance}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Honorários Contador (R$)"
                        htmlFor="accountantFees"
                        placeholder="50"
                        type="number"
                        name="accountantFees"
                        value={formData.accountantFees}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 4 && (
                <>
                    <FormFieldsetInput
                        title="Percentual de Impostos (%)"
                        htmlFor="taxesPercentage"
                        placeholder="100"
                        type="number"
                        name="taxesPercentage"
                        value={formData.taxesPercentage}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Outros Gastos (R$)"
                        htmlFor="otherExpenses"
                        placeholder="500"
                        type="number"
                        name="otherExpenses"
                        value={formData.otherExpenses}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 5 && finalExpenses.active && (
                <div>
                    Seu valor hora {finalExpenses.value}
                </div>
            )}
        </FormSteps>
    );
}