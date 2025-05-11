import { renderHook, act } from "@testing-library/react";
import { estimateTermFormModel } from "../estimate-term-form-model";

describe("estimateTermFormModel", () => {
    it("should return the expected structure", () => {
        const { result } = renderHook(() => estimateTermFormModel());

        expect(result.current.step).toBe(1);
        expect(typeof result.current.nextStep).toBe("function");
    });

    it("should increment the step", () => {
        const { result } = renderHook(() => estimateTermFormModel());

        act(() => {
            result.current.nextStep();
        });

        expect(result.current.step).toBe(2);
    });

    it("should not increment step beyond 4", () => {
        const { result } = renderHook(() => estimateTermFormModel());

        act(() => {
            result.current.nextStep();
            result.current.nextStep();
            result.current.nextStep();
            result.current.nextStep();
        });

        expect(result.current.step).toBe(4);
    });
});
