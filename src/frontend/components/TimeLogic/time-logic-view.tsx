"use client"

import Image from "next/image";
import { timeLogicModel } from "./time-logic-model";

type TimeLogicViewProps = ReturnType<typeof timeLogicModel>;

export function TimeLogicView({
    Button,
    ComeBackButton,
    handleComeBack,
    handleChageTypeProcess,
    kindOfProcess,
    styleStrategies
}: TimeLogicViewProps) {
    const Element = kindOfProcess ? styleStrategies[kindOfProcess] : <></>;

    return(
        <div className="py-4">
            <ComeBackButton onClick={handleComeBack}>
                <Image 
                    src="/arrow-left.svg"
                    width={24}
                    height={24}
                    alt="Come Back btn"
                />
            </ComeBackButton>
            { !kindOfProcess && (
                <div>
                    <h2>Agora escolha uma das opçoes</h2>
                    <p>Cada metodo é unico e pode gerar resultado diferente.</p>
                </div>
            ) }
            { kindOfProcess && (typeof Element === "function" ? <Element /> : Element) }
            { !kindOfProcess && (
                <div className="flex gap-3">
                    <Button onClick={()=> handleChageTypeProcess("expense")}>
                        <span className="font-roboto font-medium not-italic text-base text-black">Gasto</span>
                    </Button>
                    <Button onClick={()=> handleChageTypeProcess("experience")}>
                        <span className="font-roboto font-medium not-italic text-base text-black">Experiencia</span>
                    </Button>
                    <Button onClick={()=> handleChageTypeProcess("salary")}>
                        <span className="font-roboto font-medium not-italic text-base text-black">Salário</span>
                    </Button>
                </div>
            ) }
        </div>
    );
}