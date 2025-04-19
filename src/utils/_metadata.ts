import { Metadata } from "next";

export const _metadata: Metadata = {
    title: "Freelix - Calcule seu valor hora e gere contratos",
    description: "Descubra seu valor hora como freelancer e gere propostas e contratos profissionais em minutos. Totalmente gratuito e sem necessidade de cadastro!",
    keywords: [
        "freelancer",
        "freelance",
        "valor hora",
        "calcular valor hora",
        "gerar contrato",
        "gerar proposta comercial",
        "proposta freelance",
        "contrato de prestação de serviço",
        "calcular preço freelancer",
        "Freelix",
        "freelancer iniciante",
    ],
    authors: [
        { name: "Freelix Team", url: "" },
        { name: "Lucas da Silva Leoncio", url: "https://www.linkedin.com/in/lucas-silva-464b45164/" }
    ],
    creator: "Freelix",
    themeColor: "",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    openGraph: {
        title: "Freelix - Seu valor hora, cotratos e propostas fáceis",
        description: "Use o Freelix para calcular seu valor como freelancer e gerar documentos profissionais. Simples, rápido e gratuito!",
        url: "",
        siteName: "Freelix",
        images: [
            {
                url: "",
                width: 1200,
                height: 630,
                alt: "Freelix - Calcule seu valor hora e gere documentos",
            },
        ],
        locale: "pt_BR",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Freelix - Calcule seu valor hora",
        description: "Freelix é a maneira mais fácil de descobrir seu preço como freelancer e criar contratos e propostas",
        images: [
            ""
        ]
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true
        }
    }
}