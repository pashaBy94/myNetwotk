import { useFormik } from "formik";
import React, { useRef } from "react";
import st from './ProfileFormAddPost.module.css';
import { validateMessag } from "../../../validators/validForm";

export default function ProfileFormAddPost({ postAdd }) {
  const postTextarea = useRef('');
  const formik = useFormik({
      initialValues: {
          postText: '',
      },
      validate: validateMessag(300, 'postText'),
      onSubmit(value) {
          postAdd(value.postText);
          postTextarea.current.value = value.postText = '';
      }
  });
  return (
      <form onSubmit={formik.handleSubmit} className={st.posts__write}>
          <textarea
              placeholder='your news...'
              name="postText"
              id="postText"
              className={st.textarea}
              ref={postTextarea}
              value={formik.values.postText}
              onChange={formik.handleChange}
          ></textarea>
          <button type='submit' className={st.btn}>Send</button>
      </form>
  )
}
