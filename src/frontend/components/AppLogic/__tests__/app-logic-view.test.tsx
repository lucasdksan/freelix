import { render, screen, fireEvent } from "@testing-library/react";
import { AppLogicView } from "../app-logic-view";

describe("AppLogicView", () => {
    const mockHandleChange = jest.fn();
    const mockHandleBack = jest.fn();

    const DummyComponent = ({ comeBack }: { comeBack: () => void }) => (
        <div data-testid="dummy-component">
            <button onClick={comeBack}>Voltar</button>
        </div>
    );

    const baseProps = {
        Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
        handleChageTypeProcess: mockHandleChange,
        handleBackToStart: mockHandleBack,
        styleStrategies: {
            term: DummyComponent,
            time: DummyComponent,
        },
    };

    beforeEach(() => {
        mockHandleChange.mockClear();
        mockHandleBack.mockClear();
    });

    it("deve exibir o título e os botões quando kindOfProcess é null", () => {
        render(<AppLogicView {...baseProps} kindOfProcess={null} />);
        expect(screen.getByText("Vamos começar?")).toBeInTheDocument();
        expect(screen.getByText(/Preços/i)).toBeInTheDocument();
        expect(screen.getByText(/Termos/i)).toBeInTheDocument();
    });

    it("deve chamar handleChageTypeProcess com 'time' ao clicar no botão Preços", () => {
        render(<AppLogicView {...baseProps} kindOfProcess={null} />);
        fireEvent.click(screen.getByText(/Preços/i));
        expect(mockHandleChange).toHaveBeenCalledWith("time");
    });

    it("deve chamar handleChageTypeProcess com 'term' ao clicar no botão Termos", () => {
        render(<AppLogicView {...baseProps} kindOfProcess={null} />);
        fireEvent.click(screen.getByText(/Termos/i));
        expect(mockHandleChange).toHaveBeenCalledWith("term");
    });

    it("deve renderizar o componente correto quando kindOfProcess for 'time'", () => {
        render(<AppLogicView {...baseProps} kindOfProcess="time" />);
        expect(screen.getByTestId("dummy-component")).toBeInTheDocument();
    });

    it("deve renderizar o componente correto quando kindOfProcess for 'term'", () => {
        render(<AppLogicView {...baseProps} kindOfProcess="term" />);
        expect(screen.getByTestId("dummy-component")).toBeInTheDocument();
    });

    it("deve chamar handleBackToStart ao clicar no botão dentro do componente filho", () => {
        render(<AppLogicView {...baseProps} kindOfProcess="term" />);
        fireEvent.click(screen.getByText(/Voltar/i));
        expect(mockHandleBack).toHaveBeenCalled();
    });
});