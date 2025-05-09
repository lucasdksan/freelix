import { renderHook, act } from "@testing-library/react";
import { appLogicModel } from "../app-logic-model";

describe("appLogicModel", () => {
    it("should initialize with kindOfProcess as null", () => {
        const { result } = renderHook(() => appLogicModel());
        expect(result.current.kindOfProcess).toBeNull();
    });

    it("should update kindOfProcess to 'term'", () => {
        const { result } = renderHook(() => appLogicModel());

        act(() => {
            result.current.handleChageTypeProcess("term");
        });

        expect(result.current.kindOfProcess).toBe("term");
    });

    it("should update kindOfProcess to 'time'", () => {
        const { result } = renderHook(() => appLogicModel());

        act(() => {
            result.current.handleChageTypeProcess("time");
        });

        expect(result.current.kindOfProcess).toBe("time");
    });

    it("should reset kindOfProcess to null when handleBackToStart is called", () => {
        const { result } = renderHook(() => appLogicModel());

        act(() => {
            result.current.handleChageTypeProcess("term");
        });
        act(() => {
            result.current.handleBackToStart();
        });

        expect(result.current.kindOfProcess).toBeNull();
    });

    it("should return a Button component from createButton", () => {
        const { result } = renderHook(() => appLogicModel());
        expect(result.current.Button).toBeDefined();
        expect(typeof result.current.Button).toBe("function");
    });

    it("should contain valid strategy mappings", () => {
        const { result } = renderHook(() => appLogicModel());
        expect(result.current.styleStrategies.term).toBeDefined();
        expect(result.current.styleStrategies.time).toBeDefined();
    });
});
