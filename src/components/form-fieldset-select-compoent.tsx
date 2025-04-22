type FormFieldsetSelectProps = {
    title: string;
    htmlFor: string;
    items: { 
        title: string; 
        value: string; 
    }[];
} & React.InputHTMLAttributes<HTMLSelectElement>;

export function FormFieldsetSelect({ title, htmlFor, items, ...selectType }: FormFieldsetSelectProps) {
    return(
        <fieldset className="w-full flex flex-col items-start justify-center gap-2 mb-2">
            <label className="font-roboto not-italic font-normal text-base text-white text-center" htmlFor={htmlFor}>{title}</label>
            <select
                id={htmlFor}
                className="w-full p-2 border-2 rounded-lg outline-0 text-white font-roboto"
                { ...selectType }
            >
                { items.map(({ title, value }, index) => (
                    <option className="text-black" value={value} key={index}>
                        { title }
                    </option>
                )) }
            </select>
        </fieldset>
    );
}