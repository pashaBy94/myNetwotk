import st from './FormMessag.module.css';
import { useFormik } from "formik";
import { validateMessag } from "../../../validators/validForm";
import { useRef } from 'react';

export default function FormMessagWrite({ messagAdd }) {
  const formik = useFormik({
      initialValues: {
          messag: '',
      },
      validate: validateMessag(600, 'messag'),
      onSubmit(val) {
          messagAdd(val.messag);
          val.messag = '';
          mesRef.current.value = '';
      }
  });
  const mesRef = useRef('');
  return (
      <div className={st.posts}>
          <form onSubmit={formik.handleSubmit} className={st.write__messag}>
              <textarea
                  name="messag"
                  id="messag"
                  className={st.textarea}
                  placeholder='your messag...'
                  onChange={formik.handleChange}
                  value={formik.messag}
                  ref={mesRef}
              />
          {formik.errors.messag?<div className={st.no__text}>{formik.errors.messag}</div>:null}
              <button
                  type='submit'
                  className={st.btn}
              >Submit</button>
              <div className={st.wrap}></div>
          </form>
      </div>
  )
}