"use client"

import { experienceFormModel } from "./experience-form-model";
import { ExperienceFormView } from "./experience-form-view";

export function ExperienceFormViewModel() {
    const experienceFModel = experienceFormModel();

    return(
        <ExperienceFormView {...experienceFModel} />
    );
}