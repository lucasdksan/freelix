type StrategiesValues = "default" | "modalBtn";

const styleStrategies = {
    default: (newClass?: string) =>
        ({ className: `cursor-pointer flex outline-none border-none ${ newClass ?? "bg-transparent" }` }),
    modalBtn: (newClass?: string) => 
        ({ className: `flex gap-2 px-2 py-1 rounded-lg cursor-pointer font-roboto not-italic font-medium text-base ${newClass ?? ""}` }),
};

export function createButton(strategy: StrategiesValues = "default", newClass?: string) {
    const getStyle = styleStrategies[strategy] || styleStrategies.default;

    return function(props: React.ButtonHTMLAttributes<HTMLButtonElement>){
        return(
            <button {...getStyle(newClass)} {...props}>
                { props.children }
            </button>
        );
    }
}  