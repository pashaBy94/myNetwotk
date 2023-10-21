import React, { FC } from "react";
import st from './AboutForm.module.css';
import { Formik } from "formik";
import { useState } from "react";
import { parseStatus } from "../../../../../utils/helpers";
import { validateUrl } from "../../../../validators/validForm";
import { profileType } from "../../../../../typeAndInterface/typeAndInterface";

type AboutPropType = {
    profile: profileType | null,
    updateInfoProfileThunk:any,
    isMyPages:boolean,
    setModEdit:any,
    authenticationId:number | null,
    setOk?: any
};

const AboutForm:FC<AboutPropType> = ({ profile, setModEdit, updateInfoProfileThunk, authenticationId, setOk, isMyPages })=> {
    const [isFail, setNoFail] = useState(false);
    function onClick() {
        setNoFail(false);
    }
    return (
        <div className={st.about__save}>
            <Formik
                initialValues={
                    {
                        lookingForAJob: profile?.lookingForAJob,
                        lookingForAJobDescription: profile?.lookingForAJobDescription,
                        aboutMe: profile?.aboutMe,
                        fullName: profile?.fullName,
                        contacts: profile?.contacts,
                    }
                }
                validate={validateUrl(100)}
                onSubmit={(val, setSubmit) => {                   
                    let obj = { userId: authenticationId, ...val };
                    updateInfoProfileThunk(obj, setSubmit.setStatus, setModEdit);
                    setOk(true);
                }}
            >
                {(formik) => {                    
                    if (formik.status) parseStatus(formik.status)
                    return (
                        <form onSubmit={formik.handleSubmit} className={st.about__info}>
                            <p><strong>Full name? </strong>
                                <input
                                    type='text'
                                    id='fullName'
                                    name='fullName'
                                    value={formik.values.fullName || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={(formik.errors.fullName) ? st.error_list : ''}
                                /></p>
                            <p><strong>Looking for a job? </strong>
                                <input
                                    type='checkbox'
                                    id='lookingForAJob'
                                    name='lookingForAJob'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.lookingForAJob}
                                    className={st.form__checkbox} /></p>
                            <p><strong>Looking for a job description:</strong>
                                <textarea
                                    id='lookingForAJobDescription'
                                    name='lookingForAJobDescription'
                                    placeholder='Looking for a job description'
                                    value={formik.values.lookingForAJobDescription || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={(formik.errors.lookingForAJobDescription) ? st.error_list : ''}
                                ></textarea>
                            </p>
                            <p><strong>About my:</strong>
                                <textarea
                                    id='aboutMe'
                                    name='aboutMe'
                                    placeholder='Tell me about yourself'
                                    value={formik.values.aboutMe || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={(formik.errors.aboutMe) ? st.error_list : ''}
                                ></textarea></p>
                            <p><strong>Contacts my: </strong></p>
                            <ul>
                                <li><p><strong>Github: </strong>
                                    <input
                                        type='text'
                                        id='contacts.github'
                                        name='contacts.github'
                                        value={formik.values.contacts?.github || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'github') || (('github' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                                <li><p><strong>Facebook: </strong>
                                    <input
                                        type='text'
                                        id='contacts.facebook'
                                        name='contacts.facebook'
                                        value={formik.values.contacts?.facebook || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'facebook') || (('facebook' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                                <li><p><strong>Instagram: </strong>
                                    <input
                                        type='text'
                                        id='contacts.instagram'
                                        name='contacts.instagram'
                                        value={formik.values.contacts?.instagram || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'instagram') || (('instagram' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                                <li><p><strong>MainLink: </strong>
                                    <input
                                        type='text'
                                        id='contacts.mainLink'
                                        name='contacts.mainLink'
                                        value={formik.values.contacts?.mainLink || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'mainLink') || (('mainLink' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                                <li><p><strong>Twitter: </strong>
                                    <input
                                        type='text'
                                        id='contacts.twitter'
                                        name='contacts.twitter'
                                        value={formik.values.contacts?.twitter || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'twitter') || (('twitter' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                                <li><p><strong>VK: </strong>
                                    <input
                                        type='text'
                                        id='contacts.vk'
                                        name='contacts.vk'
                                        value={formik.values.contacts?.vk || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'vk') || (('vk' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                                <li><p><strong>Website: </strong>
                                    <input
                                        type='text'
                                        id='contacts.website'
                                        name='contacts.website'
                                        value={formik.values.contacts?.website || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'website') || (('website' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                                <li><p><strong>Youtube: </strong>
                                    <input
                                        type='text'
                                        id='contacts.youtube'
                                        name='contacts.youtube'
                                        value={formik.values.contacts?.youtube || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onClick={onClick}
                                        className={((parseStatus(formik.status) === 'youtube') || (('youtube' in formik.errors) && isFail)) ? st.error_list : ''}
                                    /></p></li>
                            </ul>
                            <input type="submit" value='Save' onClick={() => setNoFail(true)} className={st.about__info__rename}/>
                            {parseStatus(formik.status) ? <div>not correct is {parseStatus(formik.status)}</div> : null}
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default AboutForm;