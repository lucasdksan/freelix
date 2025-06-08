"use client"

import Image from "next/image";
import { estimateTermFormModel } from "./estimate-term-form-model";
import GenerateFileViewModel from "../GenerateFile/generate-file-viewmodel";

type EstimateTermFormViewProps = {
    handleComeBack: () => void;
} & ReturnType<typeof estimateTermFormModel>;

export function EstimateTermFormView({
    Form,
    Input,
    Button,
    Select,
    Textarea,
    handleSubmit,
    getValues,
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
            maxQuantity={10}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            onSubmit={handleSubmit(onSubmit)}
            titleForm="Estimativa para seu projeto"
            moreBtn={(step === 4 && finalResult) && (
                <Button>Próxima Etapa</Button>
            )}
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
            {step === 4 && (
                <>
                    <div>
                        <Input
                            htmlFor="city"
                            title="Cidade"
                            placeholder="Parnamirim"
                            type="text"
                            defaultValue=""
                            {...register("city")}
                        />
                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="nameCompany"
                            title="Nome da Sua Empresa"
                            placeholder="Vtex"
                            type="text"
                            defaultValue=""
                            {...register("nameCompany")}
                        />
                        {errors.nameCompany && <p className="text-red-500">{errors.nameCompany.message}</p>}
                    </div>
                </>
            )}
            {step === 5 && (
                <>
                    <div>
                        <Input
                            htmlFor="partners"
                            title="Parceiros"
                            placeholder="João Silva, Maria Souza"
                            type="text"
                            defaultValue=""
                            {...register("partners")}
                        />
                        {errors.partners && <p className="text-red-500">{errors.partners.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="name"
                            title="Seu nome"
                            placeholder="João"
                            type="text"
                            defaultValue=""
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                </>
            )}
            {step === 6 && (
                <>
                    <div>
                        <Input
                            htmlFor="phone"
                            title="Número para contrato"
                            type="text"
                            defaultValue=""
                            {...register("phone")}
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                        <Input
                            htmlFor="address"
                            title="Endereço"
                            type="text"
                            defaultValue=""
                            {...register("address")}
                        />
                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                </>
            )}
            {step === 7 && (
                <div>
                    <Textarea
                        htmlFor="descriptionProducts"
                        title="Descrição do serviço"
                        placeholder="Descrição"
                        defaultValue=""
                        {...register("descriptionProducts")}
                    />
                    {errors.descriptionProducts && <p className="text-red-500">{errors.descriptionProducts.message}</p>}
                </div>
            )}
            {step === 8 && (
                <div>
                    <Textarea
                        htmlFor="scope"
                        title="Escopo do projeto"
                        defaultValue=""
                        {...register("scope")}
                    />
                    {errors.scope && <p className="text-red-500">{errors.scope.message}</p>}
                </div>
            )}
            {step === 9 && (
                <div>
                    <Textarea
                        htmlFor="introduction"
                        title="Introdução do projeto"
                        placeholder="Introdução"
                        defaultValue=""
                        {...register("introduction")}
                    />
                    {errors.introduction && <p className="text-red-500">{errors.introduction.message}</p>}
                </div>
            )}
            {step === 10 && !finalResult && (
                <div className="flex flex-row items-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Clique no botão gerar para visualizar o resultado final</span>
                </div>
            )}
            {step === 10 && finalResult && (
                <div className="flex flex-row items-end justify-start gap-3 mt-2 mb-4">
                    <span className="font-roboto not-italic font-normal text-white text-md">Seu resultado final: <br /> {finalResult.term} e {finalResult.value} </span>
                    <GenerateFileViewModel 
                        address={getValues().address}
                        city={getValues().city}
                        complexity={getValues().complexity}
                        dailyHoursAvailable={getValues().dailyHoursAvailable}
                        descriptionProducts={getValues().descriptionProducts}
                        experience={getValues().experience}
                        introduction={getValues().introduction}
                        monthlyCost={getValues().monthlyCost}
                        months={finalResult.months}
                        name={getValues().name}
                        nameCompany={getValues().nameCompany}
                        phone={getValues().phone}
                        scope={getValues().scope}
                        seniority={getValues().seniority}
                        valueNumeric={finalResult.valueNumeric}
                        partners={getValues().partners}
                        profitMargin={getValues().profitMargin}
                    />
                </div>
            )}
        </Form>
    );
}