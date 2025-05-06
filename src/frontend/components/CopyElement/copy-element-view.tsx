import Image from "next/image";
import { copyElementModel } from "./copy-element-model";

type ModalButtonViewProps = { value: string | number; } & ReturnType<typeof copyElementModel>;

export function CopyElementView({ Button, value, ...props }: ModalButtonViewProps) {
    return (
        <Button arial-label="Copiar o valor" onClick={() => { props.handleCopyArea(value) }}>
            <Image
                src="/file.svg"
                width={24}
                height={24}
                alt="Arrow icon to start process"
            />
        </Button>
    );
}