import { GenerateProposalDTO } from "@/backend/dtos/generate-proposal-dto";
import { Document, HeadingLevel, Paragraph, TextRun, AlignmentType, TabStopPosition, LeaderType, TabStop, SectionType, Table, TableRow, TableCell, VerticalAlign, Footer } from "docx";

export class CreateDocument {
    private readonly date: Date = new Date();
    private readonly mouths: string[] = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ];
    private createTocEntry(text: string, pageNumber: number): Paragraph {
        return new Paragraph({
            tabStops: [
                {
                    type: "start",
                    position: TabStopPosition.MAX,
                },
            ],
            children: [
                new TextRun({
                    text: text,
                }),
                new TextRun({
                    text: "\t" + pageNumber,
                }),
            ],
        });
    }
    
    create(data: GenerateProposalDTO): Document {
        return new Document({
            sections: [
                {
                    properties: {
                        type: SectionType.CONTINUOUS,
                    },
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: data.city,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ", ",
                                }),
                                new TextRun({
                                    text: `${this.date.getDay()}`,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: " de ",
                                }),
                                new TextRun({
                                    text: this.mouths[this.date.getMonth()],
                                    bold: true,
                                }),
                                new TextRun({
                                    text: " de ",
                                }),
                                new TextRun({
                                    text: `${this.date.getFullYear()}`,
                                    bold: true,
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Proposta Comercial",
                                    bold: true,
                                    size: "28pt",
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: `A ${data.nameCompany},`,
                                    bold: true,
                                }),
                            ],
                        }),
                        data.partners ? new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: data.partners,
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }) : new Paragraph({}),
                        new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: "Prezados,",
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: "Apresentamos a vocês, proposta de ",
                                }),
                                new TextRun({
                                    text: data.descriptionProducts,
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: "Desde já agradecemos a oportunidade e nos colocamos à disposição para quaisquer esclarecimentos.",
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: "Atenciosamente,",
                                }),
                            ],
                            spacing: {
                                after: 200,
                            },
                        }),
                        new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: `${data.name} - Diretor`,
                                }),
                            ],
                            spacing: {
                                after: 800,
                            },
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "SUMÁRIO",
                                    bold: true,
                                    size: "28pt",
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        this.createTocEntry("1.  Introdução", 2),
                        this.createTocEntry("2.  Argumentação", 2),
                        this.createTocEntry("3.  Escopo", 3),
                        this.createTocEntry("4.  Cronograma", 3),
                        this.createTocEntry("5.  Valor dos serviços", 3),
                        ...Array(15).fill(0).map(() => new Paragraph({})),
                        new Paragraph({
                            heading: HeadingLevel.HEADING_1,
                            children: [
                                new TextRun({
                                    text: "1. Introdução",
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: data.introduction,
                                }),
                            ],
                            spacing: {
                                after: 200,
                            },
                        }),
                        new Paragraph({
                            heading: HeadingLevel.HEADING_1,
                            children: [
                                new TextRun({
                                    text: "2. Argumentação",
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "O objetivo desta proposta é apresentar os preços e prazos dos serviços",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "outrora requeridos.",
                                }),
                            ],
                            spacing: {
                                after: 800,
                            },
                        }),
                        new Paragraph({
                            heading: HeadingLevel.HEADING_1,
                            children: [
                                new TextRun({
                                    text: "3. Escopo",
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: data.scope,
                                }),
                            ],
                            spacing: {
                                after: 200,
                            },
                        }),
                        new Paragraph({
                            heading: HeadingLevel.HEADING_1,
                            children: [
                                new TextRun({
                                    text: "4. Prazo",
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: data.term,
                                }),
                            ],
                            spacing: {
                                after: 200,
                            },
                        }),
                        new Paragraph({
                            heading: HeadingLevel.HEADING_1,
                            children: [
                                new TextRun({
                                    text: "5. Bônus de contratação",
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Suporte 24h gratuito para quaisquer bugs ou problemas no primeiro ano de",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "existência do sistema via grupo no whatsapp com os desenvolvedores.",
                                }),
                            ],
                            spacing: {
                                after: 200,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Configuração gratuita de conta no Google Play Store Console e App Store",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Console para auxiliar na atualização e resolução rápida de",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "bugs.Vigilância de disponibilidade 24h com backup a cada 1 hora, ou",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "seja, caso o back-end ( serviço que informa dados de conteúdo para o",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "sistema ) por algum motivo sofra um ataque hacker ou saia do ar nós",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "seremos avisados por nossas ferramentas e no mesmo momento agiremos para",
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "resolver antes mesmo do problema ser percebido pelos usuários.",
                                }),
                            ],
                            spacing: {
                                after: 800,
                            },
                        }),
                        new Paragraph({
                            heading: HeadingLevel.HEADING_1,
                            children: [
                                new TextRun({
                                    text: "5. Valor dos Serviços",
                                    bold: true,
                                }),
                            ],
                            spacing: {
                                after: 400,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "1.  Valor único - Desenvolvimento de tudo o que está acordado no escopo da proposta",
                                }),
                            ],
                        }),
                        new Paragraph({
                            indent: {
                                left: 720,
                            },
                            children: [
                                new TextRun({
                                    text: `${data.value} - 50% na assinatura do contrato, e 50% na entrega de todos os itens do escopo da proposta.`,
                                    bold: true,
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "De Acordo Comercial",
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "________________________________________________________",
                                }),
                            ],
                            spacing: {
                                after: 200,
                            },
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: data.name,
                                    bold: true,
                                }),
                            ],
                        }),
                    ],
                    footers: {
                        default: new Footer({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: `${data.address} | ${data.phone}, ${this.date.toLocaleDateString()}`
                                        })
                                    ]
                                })
                            ]
                        })
                    }
                },
            ],
        });
    }
}