import { createButton } from "../ui/button-ui";
import modalButtonModel from "./modal-button-model";
import ModalButtonView from "./modal-button-view";

export default function ModalButtonViewModel() {
    const Button = createButton("default", "");
    const { onClick } = modalButtonModel();

    return <ModalButtonView Button={Button} onClick={onClick} />;
}