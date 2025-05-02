export class GenerateProposalView {
    response(buffer: Buffer<ArrayBufferLike>) {
        return new Response(buffer, {
            status: 200,
            headers: {
                "Content-Disposition": "attachment; filename=proposta.docx",
                "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            }
        });
    }

    errorZod(error: any) {
        return Response.json({
            success: false,
            message: "Validation failed",
            errors: error.errors,
        }, { status: 400 });
    }

    errorDefault(error: any) {
        return Response.json({
            success: false,
            message: error.message || "Internal server error",
        }, { status: 500 });
    }
}