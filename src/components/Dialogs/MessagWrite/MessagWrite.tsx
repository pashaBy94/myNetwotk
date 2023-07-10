import React, { FC } from "react";
import FormMessagWrite from "./FormMessag/FormMessag";

type MessagWriteType = {
    messagAdd: any
};

const Messagwrite: FC<MessagWriteType> = ({ messagAdd }) => {
    return (
        <FormMessagWrite messagAdd={messagAdd} />
    )
}
export default Messagwrite;