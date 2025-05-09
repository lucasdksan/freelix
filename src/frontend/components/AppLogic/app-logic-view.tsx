"use client"

import { appLogicModel } from "./app-logic-model";

type AppLogicViewProps = ReturnType<typeof appLogicModel>;

export function AppLogicView({ Button, handleChageTypeProcess, kindOfProcess, styleStrategies }: AppLogicViewProps) {
    const Element = kindOfProcess ? styleStrategies[kindOfProcess] : <></>;
    
    return(
        <div>
            <div>
                <h2>Vamos começar?</h2>
                <span>Agora selecione umas das opções abaixo para iniciar o processe.</span>
            </div>
            { kindOfProcess &&  (typeof Element === "function" ? <Element /> : Element)}
            <div className="flex gap-3">
                <Button onClick={()=> handleChageTypeProcess("time")}>
                    <span className="font-roboto font-medium not-italic text-base text-black">Preços</span>
                </Button>
                <Button onClick={()=> handleChageTypeProcess("term")}>
                    <span className="font-roboto font-medium not-italic text-base text-black">Termos</span>
                </Button>
            </div>
        </div>
    );
}