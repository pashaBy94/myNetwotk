import React, { FC, useState } from "react";
import st from './Login.module.css'
import { Formik } from 'formik';
import { validate } from "../validators/validForm";
import ReCAPTCHA from 'react-google-recaptcha';
import { validStatus } from "../validators/validForm";
import { IconContext } from "react-icons";
import { RxUpdate } from "react-icons/rx";

export type LoginPropType = {
    loginThank: any,
    captchaUrl: null | string,
    getCaptchaThank: any,
};

type CaptchaPropType = {
    handleChange: any,
    handleBlur: any,
    responseCaptcha: any,
    captchaUrl: string | null,
    getCaptchaThank: any,
};
const CaptchFromServer: FC<CaptchaPropType> = (props) => {
    return (
        <div className={st.capcha}>
            <img src={props.captchaUrl || ''} alt='' className={st.capcha__img} />
            <div className={st.wrap__capcha}>
                <input type='text'
                    id='responseCaptcha'
                    name='responseCaptcha'
                    placeholder='captcha'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={st.capcha__input}
                />
                <div className={st.capcha__btn} onClick={() => { props.getCaptchaThank() }}>
                    <IconContext.Provider value={{ size: "2em", color: "#4A77A8" }}>
                        <RxUpdate />
                    </IconContext.Provider>
                </div>
            </div>
        </div >
    )
}

const LoginForm: FC<LoginPropType> = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [isFail, setNoFail] = useState(false);
    const changeBtn = () => setIsDisabled(false);
    return (
        <Formik
            initialValues={
                {
                    login: '',
                    password: '',
                    rememberMe: false,
                    responseCaptcha: '',
                }
            }
            validate={validate(20, setNoFail)}
            onSubmit={(val, setSubmit) => {
                props.loginThank(val.login, val.password, val.rememberMe, val.responseCaptcha, setSubmit.setStatus, setNoFail);
            }}
        >
            {(formik) => {
                return (
                    <form onSubmit={formik.handleSubmit} className={st.form__login}>
                        <h3 className={st.form__login_title}>You must log in</h3>
                        <div className={st.wrap__input_form}>
                            <input
                                type='text'
                                id='login'
                                name='login'
                                placeholder='login'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={(formik.touched.login && formik.errors.login) ? `${st.input__error} ${st.input__form}` : st.input__form}
                            />
                            {formik.touched.login && formik.errors.login && <div className={st.modal__login}>{formik.errors.login}</div>}
                        </div>
                        <div className={st.wrap__input_form}>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                placeholder='password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={(formik.touched.password && formik.errors.password) ? `${st.input__error} ${st.input__form}` : st.input__form}
                            />
                            {formik.touched.password && formik.errors.password && <div className={st.modal__password}>{formik.errors.password}</div>}
                        </div>
                        <div>
                            <label htmlFor='rememberMe'>remember my</label>
                            <input
                                type='checkbox'
                                id='rememberMe'
                                name='rememberMe'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.rememberMe}
                                className={st.form__checkbox}
                            />
                        </div>
                        <div className={st.wrap_captcha}>
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                onChange={changeBtn}
                                theme='light'
                                size='normal'
                                id='capch'
                            />
                        </div>
                        {props.captchaUrl ? <CaptchFromServer
                            handleChange={formik.handleChange}
                            handleBlur={formik.handleBlur}
                            responseCaptcha={formik.values.responseCaptcha}
                            captchaUrl={props.captchaUrl}
                            getCaptchaThank={props.getCaptchaThank} /> : null
                        }
                        <input type="submit" value='submit' onClick={() => setNoFail(false)} disabled={isDisabled} className={st.form__btn} />
                        {isFail ? validStatus(formik, st) : null}
                    </form>
                )
            }
            }
        </Formik>
    )
}
const Login: FC<LoginPropType> = (props) => {
    return (
        <div className={st.login}>
            <LoginForm loginThank={props.loginThank} captchaUrl={props.captchaUrl} getCaptchaThank={props.getCaptchaThank} />
        </div>
    )
}
export default Login;