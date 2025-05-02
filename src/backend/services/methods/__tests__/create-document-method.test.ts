import { Document } from "docx";
import { GenerateProposalDTO } from "@/backend/dtos/generate-proposal-dto";
import { CreateDocument } from "../create-document-method";
import { GenerateProposalHelper } from "@/backend/helpers/generate-proposal-helper";

jest.mock("docx", () => {
    const originalModule = jest.requireActual("docx");
    const mockParagraph = jest.fn();
    const mockTextRun = jest.fn();

    return {
        ...originalModule,
        Document: jest.fn().mockImplementation(() => ({
            sections: []
        })),
        Paragraph: mockParagraph,
        TextRun: mockTextRun,
        SectionType: {
            CONTINUOUS: "CONTINUOUS"
        },
        AlignmentType: {
            CENTER: "CENTER",
            LEFT: "LEFT"
        },
        HeadingLevel: {
            HEADING_1: "HEADING_1"
        },
        __mockParagraph: mockParagraph,
        __mockTextRun: mockTextRun
    };
});

describe("CreateDocument", () => {
    let sut: CreateDocument;
    let mockData: GenerateProposalDTO;

    beforeEach(() => {
        sut = new CreateDocument();
        mockData = GenerateProposalHelper({
            nameCompany: "Empresa Teste",
            name: "João Silva",
            city: "São Paulo",
            descriptionProducts: "desenvolvimento de sistema",
            introduction: "Texto de introdução teste",
            scope: "Escopo de teste",
            term: "3 meses",
            value: "R$ 10.000,00",
            address: "Rua Teste, 123",
            phone: "(11) 9999-9999",
        });
        require("docx").__mockParagraph.mockClear();
        require("docx").__mockTextRun.mockClear();
    });

    it("should be defined", () => {
        expect(sut).toBeDefined();
    });

    it("should create document with correct structure", () => {
        const result = sut.create(mockData);

        expect(result).toBeDefined();
        expect(Document).toHaveBeenCalledTimes(1);
        expect(require("docx").__mockParagraph).toHaveBeenCalled();
        expect(require("docx").__mockTextRun).toHaveBeenCalled();
    });

    it("should include company name in the document", () => {
        sut.create(mockData);

        const textRunCalls = require("docx").__mockTextRun.mock.calls;
        const companyNameFound = textRunCalls.some((call: any) =>
            call[0]?.text?.includes(mockData.nameCompany)
        );

        expect(companyNameFound).toBeTruthy();
    });

    it("should format date correctly", () => {
        const currentDate = new Date();
        sut.create(mockData);

        const textRunCalls = require("docx").__mockTextRun.mock.calls;
        const dateFound = textRunCalls.some((call: any) =>
            call[0]?.text?.includes(currentDate.getFullYear().toString())
        );

        expect(dateFound).toBeTruthy();
    });
});