type StrategiesValues = "default";
type TypeClassName = { 
    fieldsetClass: string; 
    labelClass: string; 
    textAreaClass: string; 
};
type FieldsetTextAreaProps = {
    title: string;
    htmlFor: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const styleStrategies = {
    default: (newClass?: TypeClassName) =>
        ({ 
            fieldsetClassName: `w-full border-none outline-0 ${ newClass?.fieldsetClass ?? "" }`,
            labelClassName: `font-roboto not-italic font-normal ${ newClass?.labelClass ?? "" }`,
            textAreaClassName: `w-full outline-0 font-roboto ${ newClass?.textAreaClass ?? "" }`,
        })
};

export function createFieldsetTextArea(strategy: StrategiesValues = "default", newClass?: TypeClassName) {
    const getStyle = styleStrategies[strategy] || styleStrategies.default;

    return function({ htmlFor, title, ...props }: FieldsetTextAreaProps){
        return(
            <fieldset className={getStyle(newClass).fieldsetClassName}>
                <label className={getStyle(newClass).labelClassName} htmlFor={htmlFor}>{title}</label>
                <textarea className={getStyle(newClass).textAreaClassName} id={htmlFor} {...props} />
            </fieldset>
        );
    }
}  