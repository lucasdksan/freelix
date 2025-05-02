import { Packer } from "docx";
import { GenerateProposalDTO } from "../dtos/generate-proposal-dto";
import { CreateDocument } from "./methods/create-document-method";
import { GPServiceInterface } from "../interfaces/gp-service-interface";

export class GenerateProposalService implements GPServiceInterface {
    constructor(
        private readonly createDocument: CreateDocument,
    ){}

    async generateFile(data: GenerateProposalDTO) {
        const doc = this.createDocument.create(data);

        return await Packer.toBuffer(doc);
    }
}