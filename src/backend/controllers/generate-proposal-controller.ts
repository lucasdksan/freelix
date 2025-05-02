import { generateProposalSchema } from "../dtos/generate-proposal-dto";
import { GenerateProposalService } from "../services/generate-proposal-service";
import { GenerateProposalView } from "../views/generate-proposal-view";

export class GenerateProposalController {
    constructor(
        private readonly gPService: GenerateProposalService,
        private readonly gPView: GenerateProposalView,
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