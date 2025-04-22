type FormFieldsetProps = {
    title: string;
    htmlFor: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FormFieldset({ title, htmlFor, ...inputType }: FormFieldsetProps) {
    return(
        <fieldset className="w-full flex flex-col items-start justify-center gap-2 mb-2">
            <label className="font-roboto not-italic font-normal text-base text-white text-center" htmlFor={htmlFor}>{title}</label>
            <input 
                className="w-full p-2 border-2 rounded-lg outline-0 text-white font-roboto"
                { ...inputType }
            />
        </fieldset>
    );
}