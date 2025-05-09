"use client"

import { CopyElementViewModel } from "../CopyElement/copy-element-viewmodel";
import { experienceFormModel } from "./experience-form-model";

type ExperienceFormViewProps = {} & ReturnType<typeof experienceFormModel>;

export function ExperienceFormView({ 
    Form, 
    Input, 
    Select,
    nextStep, 
    prevStep, 
    handleSubmit, 
    onSubmit, 
    register,
    skillLevelList,
    specializationAreaList, 
    finalResult, 
    errors, 
    step }: ExperienceFormViewProps) {
    return (
        <Form
            maxQuantity={4}
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
                            htmlFor="yearsOfExperience"
                            title="Anos de experiência (R$)"
                            placeholder="2"
                            type="number"
                            min={1}
                            {...register("yearsOfExperience", { valueAsNumber: true })}
                        />
                        {errors.yearsOfExperience && <p className="text-red-500">{errors.yearsOfExperience.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="certificationsCount"
                            title="Certificações relevantes"
                            placeholder="2"
                            type="number"
                            min={0}
                            defaultValue={0}
                            {...register("certificationsCount", { valueAsNumber: true })}
                        />
                        {errors.certificationsCount && <p className="text-red-500">{errors.certificationsCount.message}</p>}
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <div>
                        <Select
                            htmlFor="skillLevel"
                            title="Senioridade (junior, pleno ou sênior)"
                            items={skillLevelList}
                            {...register("skillLevel")}
                        />
                        {errors.skillLevel && <p className="text-red-500">{errors.skillLevel.message}</p>}
                    </div>
                    <div>
                        <Select
                            htmlFor="specializationArea"
                            title="Multiplicador autônomo"
                            items={specializationAreaList}
                            {...register("specializationArea")}
                        />
                        {errors.specializationArea && <p className="text-red-500">{errors.specializationArea.message}</p>}
                    </div>
                </>
            )}
            { step === 3 && (
                <>
                    <div>
                        <Input
                            htmlFor="completedProjects"
                            title="Quantos projetos finalizados"
                            placeholder="10"
                            type="number"
                            min={1}
                            defaultValue={0}
                            {...register("completedProjects", { valueAsNumber: true })}
                        />
                        {errors.completedProjects && <p className="text-red-500">{errors.completedProjects.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="recurringClients"
                            title="Clientes recorrentes"
                            placeholder="2"
                            type="number"
                            min={0}
                            defaultValue={0}
                            {...register("recurringClients", { valueAsNumber: true })}
                        />
                        {errors.recurringClients && <p className="text-red-500">{errors.recurringClients.message}</p>}
                    </div>
                </>
            ) }
            {step === 4 && !finalResult && (
                <div className="flex flex-row items-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Clique no botão gerar para visualizar o resultado final</span>
                </div>
            )}
            {step === 4 && finalResult && (
                <div className="flex flex-row items-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Seu resultado final: { finalResult } </span>
                    <CopyElementViewModel value={finalResult} />
                </div>
            )}
        </Form>
    );
}