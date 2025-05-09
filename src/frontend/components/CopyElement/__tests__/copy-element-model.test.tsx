import { copyElementModel } from "../copy-element-model";

describe("copyElementModel", () => {
    const writeTextMock = jest.fn();
    const alertMock = jest.fn();

    beforeAll(() => {
        Object.assign(navigator, {
            clipboard: {
                writeText: writeTextMock,
            },
        });
        global.alert = alertMock;
    });

    beforeEach(() => {
        writeTextMock.mockClear();
        alertMock.mockClear();
    });

    it("deve copiar o valor para a área de transferência e mostrar alerta", async () => {
        writeTextMock.mockResolvedValueOnce(undefined); // Simula sucesso da cópia

        const { handleCopyArea } = copyElementModel("teste");

        await handleCopyArea();

        expect(writeTextMock).toHaveBeenCalledWith("teste");
        expect(alertMock).toHaveBeenCalledWith("Valor copiado com sucesso");
    });

    it("deve funcionar com número também", async () => {
        writeTextMock.mockResolvedValueOnce(undefined);

        const { handleCopyArea } = copyElementModel(123);

        await handleCopyArea();

        expect(writeTextMock).toHaveBeenCalledWith("123");
        expect(alertMock).toHaveBeenCalledWith("Valor copiado com sucesso");
    });
});
