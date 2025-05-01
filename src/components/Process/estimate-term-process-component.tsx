import { useState } from "react";
import { FormSteps } from "../Form/form-steps-component";
import { FormFieldsetSelect } from "../Form/form-fieldset-select-compoent";
import { FormFieldsetInput } from "../Form/form-fieldset-input-compoent";
import { estimateTermValue } from "@/services/estimate-term-value-service";
import { GenerateTermProcess } from "./generate-term-process-component";

export function EstimateTermProcess() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<{
        seniority: "junior" | "pleno" | "senior";
        experience: number;
        complexity: "baixa" | "media" | "alta";
        monthlyCost: number;
        dailyHoursAvailable: number;
        profitMargin?: number;
    }>({
        seniority: "junior",
        experience: 1,
        complexity: "baixa",
        monthlyCost: 0,
        dailyHoursAvailable: 2,
        profitMargin: 20
    });
    const [finalEstimateTerm, setFinalEstimateTerm] = useState<{
        term: string;
        value: string;
        valueNumeric: number;
        months: number;
    } | null>(null);
    const [nextProcess, setNextProcess] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "seniority" || name === "complexity" ? value : parseFloat(value),
        }));
    };
    const nextStep = () => setStep((prev) => prev === 4 ? prev : prev + 1);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : prev - 1);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = estimateTermValue(formData);
        setFinalEstimateTerm(result);
    };
    const handleLastBtn = () => {
        setNextProcess(typeof finalEstimateTerm === "object");
    }

    return (
        <>
            {
                nextProcess && finalEstimateTerm ? (
                    <GenerateTermProcess {...finalEstimateTerm} />
                ) : (
                    <FormSteps
                        handleLastBtn={handleLastBtn}
                        handleSubmit={handleSubmit}
                        maxQuantity={4}
                        titleForm="Estimativa para seu projeto"
                        titleLastButton="Gerar Arquivo"
                        step={step}
                        prevStep={prevStep}
                        nextStep={nextStep}
                    >
                        {step === 1 && (
                            <>
                                <FormFieldsetSelect
                                    title="Senioriadade (junior, pleno ou senior)"
                                    htmlFor="seniority"
                                    placeholder="junior"
                                    type="text"
                                    name="seniority"
                                    value={formData.seniority}
                                    items={[{ title: "Junior", value: "junior" }, { title: "Pleno", value: "pleno" }, { title: "Sênior", value: "senior" }]}
                                    onChange={handleChange}
                                />
                                <FormFieldsetInput
                                    title="Anos de experiência (2)"
                                    htmlFor="experience"
                                    placeholder="2"
                                    min={1}
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <FormFieldsetSelect
                                    title="Complexidade (baixa, media ou alta)"
                                    htmlFor="complexity"
                                    placeholder="junior"
                                    type="text"
                                    name="complexity"
                                    value={formData.complexity}
                                    items={[{ title: "Baixa", value: "baixa" }, { title: "Media", value: "media" }, { title: "Alta", value: "alta" }]}
                                    onChange={handleChange}
                                />
                                <FormFieldsetInput
                                    title="Custos por mês (2500)"
                                    htmlFor="monthlyCost"
                                    placeholder="2500"
                                    type="number"
                                    min={0}
                                    name="monthlyCost"
                                    value={formData.monthlyCost}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <FormFieldsetInput
                                    title="Horas disponieis por dia (8)"
                                    htmlFor="dailyHoursAvailable"
                                    placeholder="8"
                                    type="number"
                                    min={1}
                                    name="dailyHoursAvailable"
                                    value={formData.dailyHoursAvailable}
                                    onChange={handleChange}
                                />
                                <FormFieldsetInput
                                    title="Margem de lucro (20%)"
                                    htmlFor="profitMargin"
                                    placeholder="20"
                                    type="number"
                                    min={5}
                                    name="profitMargin"
                                    value={formData.profitMargin}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                        {step === 4 && finalEstimateTerm !== null && (
                            <div className="flex flex-col">
                                <strong>Resultado final</strong>
                                <span><strong>Meses: </strong>{finalEstimateTerm.term}</span>
                                <span><strong>Valor total: </strong>{finalEstimateTerm.value}</span>
                            </div>
                        )}
                    </FormSteps>
                )
            }
        </>
    );
}