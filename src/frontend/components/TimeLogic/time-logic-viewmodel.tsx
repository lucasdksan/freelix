"use client"

import { timeLogicModel } from "./time-logic-model";
import { TimeLogicView } from "./time-logic-view";

type TimeLogicViewModelProps = {
    comeBack: () => void;
};

export function TimeLogicViewModel({ comeBack }: TimeLogicViewModelProps) {
    const model = timeLogicModel({ comeBack });

    return(
        <TimeLogicView
            { ...model }
        />
    );
}