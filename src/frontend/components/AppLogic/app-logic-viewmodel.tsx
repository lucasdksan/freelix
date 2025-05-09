"use client"

import { appLogicModel } from "./app-logic-model"
import { AppLogicView } from "./app-logic-view";

export function AppLogicViewModel() {
    const model = appLogicModel();

    return (
        <AppLogicView { ...model } />
    );
}