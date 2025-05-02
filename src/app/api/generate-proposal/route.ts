import { GenerateProposalController } from "@/backend/controllers/generate-proposal-controller";
import { GenerateProposalService } from "@/backend/services/generate-proposal-service";
import { CreateDocument } from "@/backend/services/methods/create-document-method";
import { GenerateProposalView } from "@/backend/views/generate-proposal-view";

const createDocument = new CreateDocument();
const gPService = new GenerateProposalService(createDocument);
const gPView = new  GenerateProposalView();

export async function POST(req: Request) {
    const controller = new GenerateProposalController(gPService, gPView);

    return controller.POST(req);
}