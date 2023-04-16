import { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'
import './style.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullName: 'John Doe', phoneNumber: '123456789' },
        { fullName: 'Jane Doe', phoneNumber: '987654321' },
        { fullName: 'John Smith', phoneNumber: '123456789' },
        { fullName: 'Jane Smith', phoneNumber: '987654321' },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);


    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />

        </div>
    )
}

export default Contacts
