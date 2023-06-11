import React from "react";
import st from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import MessagWrite from "./MessagWrite/MessagWrite";
import Messages from "./Messages/Messages";

export default function Dialogs(props) {
    return (<div className={st.dialogs}>
                <div className={st.dialog__head}>
                    <h2 className={st.dialog__title}>Сообщения</h2>
                </div>
                <div className={st.list__messag}>
                    <DialogsList listUs={props.data}/>             
                    <Messages messages={props.messages}/>
                </div>
                <MessagWrite messagAdd={props.messagAdd}/>
            </div>
    )
}


