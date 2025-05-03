
import { renderHook, act } from "@testing-library/react";
import { modalModel } from "../modal-model";

describe("modalModel hook", () => {
    it("should initialize with stateModal as false", () => {
        const { result } = renderHook(() => modalModel());

        expect(result.current.stateModal).toBe(false);
    });

    it("should toggle stateModal to true", () => {
        const { result } = renderHook(() => modalModel());

        act(() => {
            result.current.toggleModal();
        });

        expect(result.current.stateModal).toBe(true);
    });

    it("should toggle stateModal back to false after two toggles", () => {
        const { result } = renderHook(() => modalModel());

        act(() => {
            result.current.toggleModal();
            result.current.toggleModal();
        });

        expect(result.current.stateModal).toBe(false);
    });
});
