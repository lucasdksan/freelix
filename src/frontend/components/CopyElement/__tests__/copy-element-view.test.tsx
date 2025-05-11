import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CopyElementView } from "../copy-element-view";

describe("CopyElementView", () => {
    it("deve renderizar o botão com o ícone e chamar handleCopyArea ao clicar", async () => {
        const handleCopyArea = jest.fn();

        const Button = ({ children, ...props }: any) => (
            <button {...props}>{children}</button>
        );

        render(
            <CopyElementView
                Button={Button}
                handleCopyArea={handleCopyArea}
            />
        );

        const button = screen.getByRole("button", { name: /copiar o valor/i });
        expect(button).toBeInTheDocument();

        const image = screen.getByAltText("Arrow icon to start process");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "/file.svg");

        await userEvent.click(button);
        expect(handleCopyArea).toHaveBeenCalledTimes(1);
    });
});
