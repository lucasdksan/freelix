import { createContext } from "react";
import { modalModel } from "./modal-model";

export const ModalContext = createContext({} as ReturnType<typeof modalModel>);