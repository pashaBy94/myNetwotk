import React from "react";
import { initId } from "../../../../../utils/helpers";

export default function Contacts({ contacts }) {
    const contactsResult: Array<React.JSX.Element> = [];
    for (let i in contacts) {
        contactsResult.push(<li key={initId()}><strong>{i}:</strong>{contacts[i]}</li>);
    }
    return (
        <ul>
            {contactsResult}
        </ul>
    )
}