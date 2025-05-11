import Image from "next/image";
import { copyElementModel } from "./copy-element-model";

type ModalButtonViewProps = ReturnType<typeof copyElementModel>;

export function CopyElementView({ Button, ...props }: ModalButtonViewProps) {
    return (
        <Button aria-label="Copiar o valor" onClick={props.handleCopyArea}>
            <Image
                src="/file.svg"
                width={24}
                height={24}
                alt="Arrow icon to start process"
            />
        </Button>
    );
}