import React, { useEffect, useState } from "react";

function Contact(){
    const[contacts, setContacts] =useState([]);

    useEffect(()=>{
        fetch('/contact.json')
        .then(response => response.json())
        .then(data => setContacts(data));
    }, []);
    return(
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <h2>{contact.name}</h2>
                        <p>{contact.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Contact;