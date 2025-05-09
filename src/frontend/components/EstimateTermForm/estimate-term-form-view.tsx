"use client"

import Image from "next/image";
import { CopyElementViewModel } from "../CopyElement/copy-element-viewmodel";
import { estimateTermFormModel } from "./estimate-term-form-model";

type EstimateTermFormViewProps = {
    handleComeBack: () => void;
} & ReturnType<typeof estimateTermFormModel>;

export function EstimateTermFormView({
    Form,
    Input,
    Select,
    handleSubmit,
    nextStep,
    onSubmit,
    prevStep,
    register,
    ComeBackButton,
    handleComeBack,
    seniorityList,
    finalResult,
    step,
    complexityList,
    errors,
}: EstimateTermFormViewProps) {
    return (
        <Form
            maxQuantity={4}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            onSubmit={handleSubmit(onSubmit)}
            titleForm="Estimativa para seu projeto"
        >   
            <ComeBackButton onClick={handleComeBack}>
                <Image 
                    src="/arrow-left.svg"
                    width={24}
                    height={24}
                    alt="Come Back btn"
                />
            </ComeBackButton>
            {step === 1 && (
                <>
                    <div>
                        <Input
                            htmlFor="experience"
                            title="Anos de experiência (2)"
                            placeholder="2"
                            type="number"
                            min={1}
                            defaultValue={1}
                            {...register("experience", { valueAsNumber: true })}
                        />
                        {errors.experience && <p className="text-red-500">{errors.experience.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="monthlyCost"
                            title="Custos por mês (2500)"
                            placeholder="2500"
                            type="number"
                            min={0}
                            defaultValue={1}
                            {...register("monthlyCost", { valueAsNumber: true })}
                        />
                        {errors.monthlyCost && <p className="text-red-500">{errors.monthlyCost.message}</p>}
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <div>
                        <Select
                            htmlFor="seniority"
                            title="Senioridade (junior, pleno ou sênior)"
                            items={seniorityList}
                            {...register("seniority")}
                        />
                        {errors.seniority && <p className="text-red-500">{errors.seniority.message}</p>}
                    </div>
                    <div>
                        <Select
                            htmlFor="complexity"
                            title="Complexidade (baixa, media ou alta)"
                            items={complexityList}
                            {...register("complexity")}
                        />
                        {errors.complexity && <p className="text-red-500">{errors.complexity.message}</p>}
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <div>
                        <Input
                            htmlFor="profitMargin"
                            title="Margem de lucro (20%)"
                            placeholder="2"
                            type="number"
                            min={1}
                            defaultValue={20}
                            {...register("profitMargin", { valueAsNumber: true })}
                        />
                        {errors.profitMargin && <p className="text-red-500">{errors.profitMargin.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="dailyHoursAvailable"
                            title="Horas disponível por dia (6)"
                            placeholder="8"
                            type="number"
                            min={1}
                            defaultValue={6}
                            {...register("dailyHoursAvailable", { valueAsNumber: true })}
                        />
                        {errors.dailyHoursAvailable && <p className="text-red-500">{errors.dailyHoursAvailable.message}</p>}
                    </div>
                </>
            )}
            {step === 4 && !finalResult && (
                <div className="flex flex-row items-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Clique no botão gerar para visualizar o resultado final</span>
                </div>
            )}
            {step === 4 && finalResult && (
                <div className="flex flex-row items-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Seu resultado final: {finalResult.term} e {finalResult.value} </span>
                    <CopyElementViewModel value={8} />
                </div>
            )}
        </Form>
    );
}