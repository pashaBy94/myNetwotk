import React, { ErrorInfo } from 'react'
import st from './Error.module.css'


type stateType = {error: any, errorInfo:ErrorInfo};

export default function Error(props:stateType) {
    
    return (
        <div className={st.error}>
            <div className={st.headers}></div>
            <div className={st.body}>
                <div>
                <h1 className={st.title}>Oops!</h1>
                <hr></hr>
                <p className={st.messag}>{props?.error?.message?props.error.message:'NOT FOUND PAGE'}</p>
                </div>
            </div>
            <div className={st.footer}></div>
        </div>
    )
}