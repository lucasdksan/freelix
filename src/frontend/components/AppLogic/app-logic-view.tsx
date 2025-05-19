"use client"

import { appLogicModel } from "./app-logic-model";

type AppLogicViewProps = ReturnType<typeof appLogicModel>;

export function AppLogicView({ Button, handleChageTypeProcess, handleBackToStart, kindOfProcess, styleStrategies }: AppLogicViewProps) {
    const Element = kindOfProcess ? styleStrategies[kindOfProcess] : <></>;
    
    return(
        <div>
            { !kindOfProcess && (
                <div className="flex flex-col justify-start items-start gap-2 mb-4">
                    <h2 className="font-roboto not-italic font-normal text-xl text-white text-center">Vamos começar?</h2>
                    <span className="font-roboto not-italic font-normal text-base text-white text-left">Agora selecione umas das opções abaixo para iniciar o processe.</span>
                </div>
            ) }
            { kindOfProcess &&  (typeof Element === "function" ? <Element comeBack={handleBackToStart} /> : Element)}
            { !kindOfProcess && (
                <div className="flex gap-3">
                    <Button onClick={()=> handleChageTypeProcess("time")}>
                        <span className="font-roboto font-medium not-italic text-base text-black">Preços</span>
                    </Button>
                    <Button onClick={()=> handleChageTypeProcess("term")}>
                        <span className="font-roboto font-medium not-italic text-base text-black">Termos</span>
                    </Button>
                </div>
            ) }
        </div>
    );
}