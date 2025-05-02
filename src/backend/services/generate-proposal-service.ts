import { Packer } from "docx";
import { GenerateProposalDTO } from "../dtos/generate-proposal-dto";
import { CreateDocument } from "./methods/create-document-method";

export class GenerateProposalService {
    constructor(
        private readonly createDocument: CreateDocument,
    ){}

    async generateFile(data: GenerateProposalDTO) {
        const doc = this.createDocument.create(data);

        return await Packer.toBuffer(doc);
    }
}