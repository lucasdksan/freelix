import { Document, Packer, Paragraph } from "docx";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const {
        cite, day,
        mouth, year,
        nameCompany, partners,
        descriptionProducts, name,
        introduction, scope,
        term, value,
        address, phone,
        signatureDate
    } = await req.json();

    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({ text: `${cite}, ${day} de ${mouth} de ${year}`, spacing: { after: 300 } }),
                    new Paragraph({ text: "Proposta Comercial", spacing: { after: 300 }, heading: "Heading1" }),
                    new Paragraph({ text: "A", spacing: { after: 100 } }),
                    new Paragraph({ text: nameCompany, spacing: { after: 100 } }),
                    new Paragraph({ text: partners, spacing: { after: 300 } }),
    
                    new Paragraph("Prezados,"),
                    new Paragraph({
                        text: descriptionProducts,
                        spacing: { after: 300 }
                    }),
                    new Paragraph("Desde já agradecemos a oportunidade e nos colocamos à disposição para quaisquer esclarecimentos."),
                    new Paragraph(""),
                    new Paragraph({ text: `Atenciosamente,`, spacing: { after: 100 } }),
                    new Paragraph({ text: `${name} - Diretor`, spacing: { after: 300 }}),
    
                    new Paragraph({ text: "SUMÁRIO", heading: "Heading2", spacing: { after: 200 } }),
                    new Paragraph("Introdução ________________________________________________ 2"),
                    new Paragraph("Argumentação ____________________________________________ 2"),
                    new Paragraph("Escopo ___________________________________________________ 3"),
                    new Paragraph("Cronograma ______________________________________________ 3"),
                    new Paragraph("Valor dos serviços ________________________________________ 3"),
                    new Paragraph(""),
    
                    new Paragraph({ text: "1. Introdução", heading: "Heading2" }),
                    new Paragraph(introduction),
    
                    new Paragraph({ text: "2. Argumentação", heading: "Heading2" }),
                    new Paragraph("O objetivo desta proposta é apresentar os preços e prazos dos serviços outrora requeridos."),
    
                    new Paragraph({ text: "3. Escopo", heading: "Heading2" }),
                    new Paragraph(scope),
    
                    new Paragraph({ text: "4. Cronograma", heading: "Heading2" }),
                    new Paragraph(term),
    
                    new Paragraph({ text: "5. Valor dos Serviços", heading: "Heading2" }),
                    new Paragraph(value),
    
                    new Paragraph({ text: "6. Bônus de Contratação", heading: "Heading2" }),
                    new Paragraph("Suporte 24h gratuito para quaisquer bugs ou problemas no primeiro ano de existência do sistema via grupo no WhatsApp com os desenvolvedores."),
                    new Paragraph("Configuração gratuita de conta no Google Play Store Console e App Store Console."),
                    new Paragraph("Vigilância de disponibilidade 24h com backup a cada 1 hora..."),
    
                    new Paragraph({ text: "De Acordo Comercial", spacing: { before: 400, after: 100 } }),
                    new Paragraph(""),
                    new Paragraph("___________________________________________________________"),
                    new Paragraph(name),
                    new Paragraph(`${address} | ${phone}, ${signatureDate}`),
                ]
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);

    return new NextResponse(buffer, {
        headers: {
            "Content-Disposition": "attachment; filename=proposta.docx",
            "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }
    });
}