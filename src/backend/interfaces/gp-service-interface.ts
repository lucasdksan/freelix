import { GenerateProposalDTO } from "../dtos/generate-proposal-dto";

export interface GPServiceInterface {
    generateFile(data: GenerateProposalDTO): Promise<Buffer<ArrayBufferLike>>;
}