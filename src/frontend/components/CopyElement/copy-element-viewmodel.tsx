import { copyElementModel } from "./copy-element-model";
import { CopyElementView } from "./copy-element-view";

export function CopyElementViewModel({ value }: { value: string | number; }) {
    const { Button, ...values } = copyElementModel();

    return (
        <CopyElementView 
            value={value} 
            Button={Button} 
            {...values} 
        />
    );
}