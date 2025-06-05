import Image from "next/image";
import generateFileModel from "./generate-file-model";

type GenerateFileViewProps = ReturnType<typeof generateFileModel>;

export default function GenerateFileView({ Button, ...props }: GenerateFileViewProps){
    return (
        <Button aria-label="Generate File">
            <Image
                src="/file.svg"
                width={24}
                height={24}
                alt="Arrow icon to start process"
            />
        </Button>
    );
}