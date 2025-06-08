type StrategiesValues = "default";
type TypeClassName = { 
    fieldsetClass: string; 
    labelClass: string; 
    selectClass: string; 
};
type FieldsetSelectProps = {
    title: string;
    htmlFor: string;
    items: {
        title: string | number;
        value: string | number;
    }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const styleStrategies = {
    default: (newClass?: TypeClassName) =>
        ({ 
            fieldsetClassName: `w-full border-none outline-0 ${ newClass?.fieldsetClass ?? "" }`,
            labelClassName: `font-roboto not-italic font-normal ${ newClass?.labelClass ?? "" }`,
            selectClassName: `w-full outline-0 font-roboto ${ newClass?.selectClass ?? "" }`,
        })
};

export function createFieldsetSelect(strategy: StrategiesValues = "default", newClass?: TypeClassName) {
    const getStyle = styleStrategies[strategy] || styleStrategies.default;

    return function({ htmlFor, title, items, ...props }: FieldsetSelectProps){
        return(
            <fieldset className={getStyle(newClass).fieldsetClassName}>
                <label className={getStyle(newClass).labelClassName} htmlFor={htmlFor}>{title}</label>
                <select className={getStyle(newClass).selectClassName} id={htmlFor} {...props}>
                    { items.map(({ title, value }, index) => (
                        <option className="text-black" key={index} value={value}>{title}</option>
                    )) }
                </select>
            </fieldset>
        );
    }
}  