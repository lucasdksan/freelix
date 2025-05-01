"use client"

import { useState } from "react";
import { FormSteps } from "../Form/form-steps-component";
import { FormFieldsetInput } from "../Form/form-fieldset-input-compoent";

type GenerateTermProcessProps = {
    term: string;
    value: string;
    months: number;
}

export function GenerateTermProcess(props: GenerateTermProcessProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<{
        city: string,
        day: number,
        year: number,
        nameCompany: string,
        partners: string,
        descriptionProducts: string,
        name: string,
        introduction: string,
        scope: string,
        address: string,
        phone: string,
        signatureDate: string
    }>({
        address: "",
        city: "",
        day: 1,
        descriptionProducts: "",
        introduction: "",
        name: "",
        nameCompany: "",
        partners: "",
        phone: "",
        scope: "",
        signatureDate: "",
        year: 2020,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "day" || name === "year" ? parseInt(value) : value,
        }));
    };
    const nextStep = () => setStep((prev) => prev === 7 ? prev : prev + 1);
    const prevStep = () => setStep((prev) => prev === 1 ? prev : prev - 1);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        fetch("/api/generate-proposal", {
            method: "POST",
            body: JSON.stringify({ ...props, ...formData, month: props.months }),
            headers: { "Content-Type": "application/json" }
        }).then(async (response) => {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");

            a.href = url;
            a.download = "proposta.docx";
            a.click();
        });
    };
    const handleLastBtn = () => { };

    return (
        <FormSteps
            handleLastBtn={handleLastBtn}
            handleSubmit={handleSubmit}
            maxQuantity={7}
            titleForm="Dados para gerar o arquivo"
            titleLastButton="Download"
            step={step}
            prevStep={prevStep}
            nextStep={nextStep}
        >
            {step === 1 && (
                <>
                    <FormFieldsetInput
                        title="Cidade"
                        htmlFor="city"
                        placeholder="São Paulo"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Dia da Semana"
                        htmlFor="day"
                        placeholder="10"
                        type="number"
                        min={1}
                        max={31}
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 2 && (
                <>
                    <FormFieldsetInput
                        title="Nome da Empresa"
                        htmlFor="nameCompany"
                        placeholder="São Paulo"
                        type="text"
                        name="nameCompany"
                        value={formData.nameCompany}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Ano"
                        htmlFor="year"
                        placeholder="2020"
                        type="number"
                        min={2000}
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 3 && (
                <>
                    <FormFieldsetInput
                        title="Parceiros"
                        htmlFor="partners"
                        placeholder="Lucas da Silva, Aline Lima"
                        type="text"
                        name="partners"
                        value={formData.partners}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Descrição do serviço"
                        htmlFor="descriptionProducts"
                        placeholder=""
                        type="text"
                        name="descriptionProducts"
                        value={formData.descriptionProducts}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 4 && (
                <>
                    <FormFieldsetInput
                        title="Seu nome"
                        htmlFor="name"
                        placeholder="Lucas da Silva"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Introdução sobre o serviço"
                        htmlFor="introduction"
                        placeholder=""
                        type="text"
                        name="introduction"
                        value={formData.introduction}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 5 && (
                <>
                    <FormFieldsetInput
                        title="Escopo do serviço"
                        htmlFor="scope"
                        placeholder=""
                        type="text"
                        name="scope"
                        value={formData.scope}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Seu endereço"
                        htmlFor="address"
                        placeholder="Rua das Flores, 123 - Sala 45 - São Paulo - SP"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 6 && (
                <>
                    <FormFieldsetInput
                        title="Número de contato"
                        htmlFor="phone"
                        placeholder="(11) 98765-4321"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <FormFieldsetInput
                        title="Data da assinatura"
                        htmlFor="signatureDate"
                        placeholder="22/04/2025"
                        type="text"
                        name="signatureDate"
                        value={formData.signatureDate}
                        onChange={handleChange}
                    />
                </>
            )}
            {step === 7 && (
                <span>Gerando o arquivo</span>
            )}
        </FormSteps>
    );
}