import React from "react";
import st from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagWrite from "./MessagWrite/MessagWrite";
import Messages from "./Messages/Messages";

type  DialogsPropsType = {
};

export default function Dialogs(props:DialogsPropsType) {
    return (<div className={st.dialogs}>
                <div className={st.dialog__head}>
                    <h2 className={st.dialog__title}>Messages</h2>
                </div>
                <div className={st.list__messag}>
                    <DialogsList />             
                    <Messages />
                </div>
                <MessagWrite />
            </div>
    )
}


