import React from "react";
import { initId } from "../../../../../utils/helpers";
import st from './ContactsForm.module.css';


export default function ContactsForm({contacts, formik, handleChange}){
  console.log(formik);
  const contactsResult = [];
  for(let i in contacts){
      contactsResult.push(<li key={initId()}>
      <strong>{i}:</strong>
      <input type='text' 
      id={`contacts.${i}`}
      name={`contacts.${i}`}
      value={formik.values.contacts[i] || 'not found'}
      onChange={handleChange}
      onBlur={formik.handleBlur}/></li>);
  }
  return(
      <ul>
          {contactsResult}
      </ul>

  )
}