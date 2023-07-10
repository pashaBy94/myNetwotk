import React, { FC } from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { messagAdd } from "../../redux/dialogsPageReducer";
import { authUs } from "../../hot/authUs";
import { compose } from "redux";
import { getDialodsPageData, getMessag } from "../../redux/selectors";
import { GlobalStateType, MessagType } from "../../typeAndInterface/typeAndInterface";

export type DialogsContainerType = {
    messages: Array<MessagType>,
    data: Array<object>,
    messagAdd: any
};

const DialogsContainer:FC<DialogsContainerType> = ({messages, data, messagAdd})=>{
    return(
        <Dialogs 
        messages={messages}
        data={data}
        messagAdd={messagAdd}
        />
    )
}

const mapStateToProps = (state:GlobalStateType) => ({
        messages: getMessag(state),
        data: getDialodsPageData(state),
    });

export default compose(connect(mapStateToProps, {messagAdd}), authUs)(DialogsContainer) 
