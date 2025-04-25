type FormStepsProps = {
    titleForm: string;
    step: number;
    maxQuantity: number;
    titleLastButton: string;
    children: React.ReactNode;
    handleSubmit: (e: React.FormEvent) => void;
    handleLastBtn: () => void;
    prevStep: () => void;
    nextStep: () => void;
}

export function FormSteps({ 
    titleForm, 
    step, 
    children, 
    maxQuantity, 
    titleLastButton,
    handleSubmit, 
    handleLastBtn, 
    nextStep, 
    prevStep 
}: FormStepsProps) {
    return (
        <div className="flex flex-col h-full w-full items-start gap-2 justify-start">
            <h2 className="font-roboto not-italic font-normal text-lg text-white text-center">{titleForm}</h2>
            <form className="w-full h-full" onSubmit={handleSubmit}>
                { children }
                <div className="flex justify-between mt-3 gap-4">
                    {(step < maxQuantity) ? (
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
                            <button onClick={handleLastBtn} className="w-full items-center justify-center flex gap-2 px-2 py-1 rounded-lg bg-white text-btn-background cursor-pointer font-roboto not-italic font-normal text-lg text-center" type="submit">
                                { titleLastButton }
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}