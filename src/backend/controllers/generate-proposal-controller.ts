import { generateProposalSchema } from "../dtos/generate-proposal-dto";
import { GPServiceInterface } from "../interfaces/gp-service-interface";
import { GPViewInterface } from "../interfaces/gp-view-interface";

export class GenerateProposalController {
    constructor(
        private readonly gPService: GPServiceInterface,
        private readonly gPView: GPViewInterface,
    ){}

    async POST(req: Request) {
        try {
            const body = await req.json();
            const data = generateProposalSchema.parse(body);
            const buffer = await this.gPService.generateFile(data);

            return this.gPView.response(buffer);
        } catch (error: any) {
            return this.gPView[error.name === "ZodError" ? "errorZod": "errorDefault"](error);
        }
    }
}