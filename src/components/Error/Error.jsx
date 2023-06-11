import st from './Error.module.css'

export default function Error(props) {

    return (
        <div>
            <div className={st.header}></div>
            <div className={st.body}>
                <div>
                <h1 className={st.title}>Oops!</h1>
                <hr></hr>
                <p className={st.messag}>{props.error.message}</p>
                </div>
            </div>
            <div className={st.footer}></div>
        </div>
    )
}