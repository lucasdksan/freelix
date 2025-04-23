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
                    new Paragraph(`${cite}, ${day} de ${mouth} de ${year}`),
                    new Paragraph(""),
                    new Paragraph("Proposta Comercial"),
                    new Paragraph(`A\n ${nameCompany}, \n ${partners}`),
                    new Paragraph(""),
                    new Paragraph("Prezados,"),
                    new Paragraph(descriptionProducts),
                    new Paragraph("Desde já agradecemos a oportunidade"),
                    new Paragraph(""),
                    new Paragraph(`Atenciosamente, \n ${name} - Diretor`),
                    new Paragraph(""),
                    new Paragraph("1. Introdução"),
                    new Paragraph(introduction),
                    new Paragraph("2. Escopo"),
                    new Paragraph(scope),
                    new Paragraph("3. Prazo"),
                    new Paragraph(term),
                    new Paragraph("4. Valor dos Serviços"),
                    new Paragraph(value),
                    new Paragraph("5. Bônus de Contratação"),
                    new Paragraph("Suporte 24h gratuito no 1º ano..."),
                    new Paragraph("Configuração gratuita nas lojas..."),
                    new Paragraph("De Acordo Comercial"),
                    new Paragraph(""),
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