export interface GPViewInterface {
    response(buffer: Buffer<ArrayBufferLike>): Response;
    errorZod(error: any): Response;
    errorDefault(error: any): Response;
}