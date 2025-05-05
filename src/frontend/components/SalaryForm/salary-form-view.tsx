"use client"

import { salaryFormModel } from "./salary-form-model";

type SalaryFormViewProps = {} & ReturnType<typeof salaryFormModel>;

export function SalaryFormView({ 
    Form, 
    Input, nextStep, prevStep, handleSubmit, onSubmit, register, finalResult, errors, step }: SalaryFormViewProps) {
    return (
        <Form
            maxQuantity={3}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            titleForm="Calcular baseado em Salário"
            onSubmit={handleSubmit(onSubmit)}
        >
            {step === 1 && (
                <>
                    <div>
                        <Input
                            htmlFor="monthlySalary"
                            title="Salário por mês (R$)"
                            placeholder="3200"
                            type="number"
                            min={0}
                            {...register("monthlySalary", { valueAsNumber: true })}
                        />
                        {errors.monthlySalary && <p className="text-red-500">{errors.monthlySalary.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="benefitsValue"
                            title="Benefícios (R$)"
                            placeholder="800"
                            type="number"
                            min={0}
                            {...register("benefitsValue", { valueAsNumber: true })}
                        />
                        {errors.benefitsValue && <p className="text-red-500">{errors.benefitsValue.message}</p>}
                    </div>
                </>
            )}
            {step === 2 && (!errors.benefitsValue && !errors.monthlySalary) && (
                <>
                    <div>
                        <Input
                            htmlFor="workingHoursPerMonth"
                            title="Horas de trabalho por mês"
                            placeholder="160"
                            type="number"
                            min={0}
                            {...register("workingHoursPerMonth", { valueAsNumber: true })}
                        />
                        {errors.workingHoursPerMonth && <p className="text-red-500">{errors.workingHoursPerMonth.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="freelanceMultiplier"
                            title="Multiplicador autônomo"
                            placeholder="1"
                            type="number"
                            min={0}
                            step={0.1}
                            {...register("freelanceMultiplier", { valueAsNumber: true })}
                        />
                        {errors.freelanceMultiplier && <p className="text-red-500">{errors.freelanceMultiplier.message}</p>}
                    </div>
                </>
            )}
            {step === 3 && (!errors.freelanceMultiplier && !errors.workingHoursPerMonth) && finalResult && (
                <div>
                    Seu resultado final: { finalResult }
                </div>
            )}
        </Form>
    );
}