import st from './FormMessag.module.css';
import React, { FC } from "react";
import { useFormik } from "formik";
import { validateMessag } from "../../../validators/validForm";
import { useRef } from 'react';
import { FormikProps } from 'formik';
import { useDispatch } from 'react-redux';
import { messagAdd } from '../../../../redux/dialogsPageReducer';


type FormMessagType = {
};

type FormValuesType = FormikProps<FormMessagType>;

const FormMessagWrite:FC<FormMessagType> = ()=> {
    const dispatch = useDispatch();
    const mesRef = useRef<HTMLTextAreaElement>(null);
    const formik = useFormik<{messag:string}>({
        initialValues: {
            messag: '',
        },
        validate: validateMessag(600, 'messag'),
        onSubmit(val) {
            dispatch(messagAdd(val.messag));
            val.messag = '';
            if(mesRef.current)
            mesRef.current.value = '';
        }
    });
    return (
        <div className={st.posts}>
            <form onSubmit={formik.handleSubmit} className={st.write__messag}>
                <textarea
                    name="messag"
                    id="messag"
                    className={st.textarea}
                    placeholder='your messag...'
                    onChange={formik.handleChange}
                    value={formik.values.messag}
                    ref={mesRef}
                />
                {formik.errors.messag ? <div className={st.no__text}>{formik.errors.messag}</div> : null}
                <button
                    type='submit'
                    className={st.btn}
                >Submit</button>
                <div className={st.wrap}></div>
            </form>
        </div>
    )
}


export default FormMessagWrite;