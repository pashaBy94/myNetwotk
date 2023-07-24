import React, { FC, useEffect } from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { messagAdd } from "../../redux/dialogsPageReducer";
import { authUs } from "../../hot/authUs";
import { compose } from "redux";
import { getDialodsPageData, getMessag } from "../../redux/selectors";
import { DialogsType, GlobalStateType, MessagType } from "../../typeAndInterface/typeAndInterface";
import { ComponentType } from "react";

export type DialogsContainerType = {
    messages: Array<MessagType>,
    data: Array<DialogsType>,
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

export default compose<ComponentType>(connect(mapStateToProps, {messagAdd}), authUs)(DialogsContainer) 
