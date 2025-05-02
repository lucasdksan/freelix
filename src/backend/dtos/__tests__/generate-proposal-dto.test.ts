import { GenerateProposalDTO, generateProposalSchema } from "../generate-proposal-dto";
import { GenerateProposalHelper } from "@/backend/helpers/generate-proposal-helper";

describe("Generate Proposal DTO", () => {
    let props: GenerateProposalDTO;

    beforeEach(() => {
        props = GenerateProposalHelper({});
    });

    it("should generate a valid proposal DTO", () => {
        const result = generateProposalSchema.safeParse(props);
        expect(result.success).toBe(true);

        if (!result.success) {
            console.error(result.error.format());
        }
    });

    it("should have all required fields filled", () => {
        expect(typeof props.city).toBe("string");
        expect(typeof props.nameCompany).toBe("string");
        expect(typeof props.descriptionProducts).toBe("string");
        expect(typeof props.name).toBe("string");
        expect(typeof props.introduction).toBe("string");
        expect(typeof props.scope).toBe("string");
        expect(typeof props.term).toBe("string");
        expect(typeof props.value).toBe("string");
        expect(typeof props.address).toBe("string");
        expect(typeof props.phone).toBe("string");

        if (props.partners !== undefined) {
            expect(typeof props.partners).toBe("string");
        }
    });
});
