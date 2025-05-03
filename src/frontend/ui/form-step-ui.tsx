import { createButton } from "./button-ui";

type StrategiesValues = "default";
type FieldsetFormProps = {
    titleForm: string;
    step: number;
    maxQuantity: number;
    titleLastButton: string;
    children: React.ReactNode;
    handleLastBtn: () => void;
    prevStep: () => void;
    nextStep: () => void;
} & React.FormHTMLAttributes<HTMLFormElement>;

const styleStrategies = {
    default: () =>
        ({ 
            container: "flex flex-col h-full w-full items-start gap-2 justify-start",
            title: "font-roboto not-italic font-normal text-lg text-white text-center",
            form: "w-full h-full",
        }),
};

const Button = createButton("modalBtn", "disabled:bg-[#dee2e6] items-center justify-center gap-2 px-2 py-1 bg-white text-black text-lg text-center");

export function createFormStep(strategy: StrategiesValues = "default") {
    const getStyle = styleStrategies[strategy] || styleStrategies.default;

    return function({
        handleLastBtn,
        nextStep, 
        prevStep,
        titleLastButton,
        maxQuantity,
        titleForm,
        children,
        step,
        ...props
    }: FieldsetFormProps) {
        return(
            <div className={getStyle().container}>
                <h2 className={getStyle().title}>{titleForm}</h2>
                <form className={getStyle().form} { ...props }>
                    { children }
                    <div className="flex justify-between mt-3 gap-4">
                        <Button type="button" onClick={prevStep} disabled={step === 1}>
                            Voltar
                        </Button>
                        { (step < maxQuantity) ? (
                            <Button type="button" onClick={nextStep}>
                                Próximo
                            </Button>
                        ) : (
                            <Button type="button" onClick={handleLastBtn}>
                                { titleLastButton }
                            </Button>
                        ) }
                    </div>
                </form>
            </div>
        );
    } 
}