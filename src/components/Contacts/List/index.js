import {useState} from 'react'

function List({ contacts }) {

    const [searchText, setSearchText] = useState('');

    const filteredContacts = contacts.filter((contact) => {
        return Object.keys(contact).some((key) => {
            return contact[key].toString().toLowerCase().includes(searchText.toLowerCase());
        });
    });

    return (
        <div>
            <input placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
            <ul className='list'>
                {filteredContacts.map((contact, i) => (
                    <li key={i}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phoneNumber}</span>
                    </li>
                ))}
            </ul>
            <p>Number of contacts: ({filteredContacts.length})</p>
        </div>
    )
}

export default List
