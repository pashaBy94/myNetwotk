import React from "react";
import { initId } from "../../../../../utils/helpers";



export default function Contacts({ contacts }) {
    const contactsResult = [];
    for (let i in contacts) {
        contactsResult.push(<li key={initId()}><strong>{i}:</strong>{contacts[i]}</li>);
    }
    return (
        <ul>
            {contactsResult}
        </ul>

    )
}