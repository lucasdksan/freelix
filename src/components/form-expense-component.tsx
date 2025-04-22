"use client"

import { useState } from "react";
import { calculateExpenses } from "@/services/calculate-expenses-service";
import { FormFieldsetInput } from "./form-fieldset-input-compoent";

export function FormExpense() {
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
        reserveFundPercentage: 10,
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

    return (
        <div className="flex flex-col h-full w-full items-start gap-2 justify-start">
            <h2 className="font-roboto not-italic font-normal text-lg text-white text-center">Calcular baseado em despesas</h2>
            <form className="w-full h-full" onSubmit={handleSubmit}>
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
                            title="Percentual para Reserva (%)"
                            htmlFor="reserveFundPercentage"
                            placeholder="50"
                            type="number"
                            name="reserveFundPercentage"
                            value={formData.reserveFundPercentage}
                            onChange={handleChange}
                        />
                    </>
                )}
                {step === 5 && finalExpenses.active && (
                    <div>
                        Seu valor hora {finalExpenses.value}
                    </div>
                )}
                <div className="flex justify-between mt-3 gap-4">
                    {(step < 5) ? (
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