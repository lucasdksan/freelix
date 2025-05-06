type StrategiesValues = "default";
type TypeClassName = { 
    fieldsetClass: string; 
    labelClass: string; 
    inputClass: string; 
};
type FieldsetInputProps = {
    title: string;
    htmlFor: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const styleStrategies = {
    default: (newClass?: TypeClassName) =>
        ({ 
            fieldsetClassName: `w-full border-none outline-0 ${ newClass?.fieldsetClass ?? "" }`,
            labelClassName: `font-roboto not-italic font-normal ${ newClass?.labelClass ?? "" }`,
            inputClassName: `w-full outline-0 font-roboto ${ newClass?.inputClass ?? "" }`,
        })
};

export function createFieldsetInput(strategy: StrategiesValues = "default", newClass?: TypeClassName) {
    const getStyle = styleStrategies[strategy] || styleStrategies.default;

    return function({ htmlFor, title, ...props }: FieldsetInputProps){
        return(
            <fieldset className={getStyle(newClass).fieldsetClassName}>
                <label className={getStyle(newClass).labelClassName} htmlFor={htmlFor}>{title}</label>
                <input className={getStyle(newClass).inputClassName} id={htmlFor} {...props} />
            </fieldset>
        );
    }
}  