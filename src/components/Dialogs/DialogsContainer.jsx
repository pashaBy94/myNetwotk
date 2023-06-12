import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { messagAdd } from "../../redux/dialogsPageReducer.ts";
import { authUs } from "../../hot/authUs";
import { compose } from "redux";
import { getDialodsPageData, getMessag } from "../../redux/selectors";

function DialogsContainer({messages, data, messagAdd}){
        return(
            <Dialogs 
            messages={messages}
            data={data}
            messagAdd={messagAdd}
            />
        )
    }

const mapStateToProps = state => ({
        messages: getMessag(state),
        data: getDialodsPageData(state),
    });

export default compose(connect(mapStateToProps, {messagAdd}), authUs)(DialogsContainer) 
