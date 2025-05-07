"use client"

import { CopyElementViewModel } from "../CopyElement/copy-element-viewmodel";
import { expenseFormModel } from "./expense-form-model";

type ExpenseFormViewProps = {} & ReturnType<typeof expenseFormModel>;

export function ExpenseFormView({
    Form,
    Input,
    errors,
    finalResult,
    handleSubmit,
    nextStep,
    onSubmit,
    prevStep,
    register,
    step
}: ExpenseFormViewProps) {
    return (
        <Form
            maxQuantity={5}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            titleForm="Calcular baseado em despesas"
            onSubmit={handleSubmit(onSubmit)}
        >
            {step === 1 && (
                <>
                    <div>
                        <Input
                            htmlFor="monthlyExpenses"
                            title="Despesas Mensais (R$)"
                            placeholder="3200"
                            type="number"
                            min={0}
                            {...register("monthlyExpenses", { valueAsNumber: true })}
                        />
                        {errors.monthlyExpenses && <p className="text-red-500">{errors.monthlyExpenses.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="desiredProfitMargin"
                            title="Margem de Lucro Desejada (%)"
                            placeholder="30"
                            type="number"
                            defaultValue={30}
                            min={5}
                            {...register("desiredProfitMargin", { valueAsNumber: true })}
                        />
                        {errors.desiredProfitMargin && <p className="text-red-500">{errors.desiredProfitMargin.message}</p>}
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <div>
                        <Input
                            htmlFor="workingHoursPerMonth"
                            title="Horas trabalhadas por mês"
                            placeholder="30"
                            type="number"
                            defaultValue={160}
                            min={5}
                            {...register("workingHoursPerMonth", { valueAsNumber: true })}
                        />
                        {errors.workingHoursPerMonth && <p className="text-red-500">{errors.workingHoursPerMonth.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="softwareLicenses"
                            title="Licenças de Software"
                            placeholder="100"
                            type="number"
                            defaultValue={0}
                            min={0}
                            {...register("softwareLicenses", { valueAsNumber: true })}
                        />
                        {errors.softwareLicenses && <p className="text-red-500">{errors.softwareLicenses.message}</p>}
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <div>
                        <Input
                            htmlFor="healthInsurance"
                            title="Plano de saúde (R$)"
                            placeholder="300"
                            type="number"
                            defaultValue={0}
                            min={0}
                            {...register("healthInsurance", { valueAsNumber: true })}
                        />
                        {errors.healthInsurance && <p className="text-red-500">{errors.healthInsurance.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="accountantFees"
                            title="Honorários contador (R$)"
                            placeholder="100"
                            type="number"
                            min={0}
                            defaultValue={0}
                            {...register("accountantFees", { valueAsNumber: true })}
                        />
                        {errors.accountantFees && <p className="text-red-500">{errors.accountantFees.message}</p>}
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <div>
                        <Input
                            htmlFor="taxesPercentage"
                            title="Percentual de impostos (%)"
                            placeholder="10"
                            type="number"
                            defaultValue={6}
                            min={0}
                            {...register("taxesPercentage", { valueAsNumber: true })}
                        />
                        {errors.taxesPercentage && <p className="text-red-500">{errors.taxesPercentage.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="otherExpenses"
                            title="Outros gastos (R$)"
                            placeholder="100"
                            type="number"
                            min={0}
                            defaultValue={0}
                            {...register("otherExpenses", { valueAsNumber: true })}
                        />
                        {errors.otherExpenses && <p className="text-red-500">{errors.otherExpenses.message}</p>}
                    </div>
                </>
            )}
            {step === 5 && !finalResult && (
                <div className="flex flex-row items-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Clique no botão gerar para visualizar o resultado final</span>
                </div>
            )}
            {step === 5 && finalResult && (
                <div className="flex flex-row items-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Seu resultado final: {finalResult} </span>
                    <CopyElementViewModel value={finalResult} />
                </div>
            )}
        </Form>
    );
}