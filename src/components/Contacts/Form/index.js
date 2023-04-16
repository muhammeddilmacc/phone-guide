import { useEffect, useState } from 'react'
import '../form-style.css'
const defaultFormValues = { fullName: '', phoneNumber: '' };

function Form({addContact, contacts}) {

    
    const [form, setForm] = useState(defaultFormValues);

    useEffect(() => {
        setForm(defaultFormValues);
    }, [contacts]);

    const onChangeFormInputs = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullName === '' || form.phoneNumber === '') {
            return false;
        }
        addContact([...contacts, form]);
         
    }


    return (
        <form onSubmit={onSubmit}>

            <div><input name="fullName" value={form.fullName} placeholder="Name" onChange={onChangeFormInputs} /></div>
            <div><input name="phoneNumber" value={form.phoneNumber} placeholder="Phone" onChange={onChangeFormInputs} /></div>

            <div className='add-btn'><button >Add Contact</button></div>
        </form>
    )
}

export default Form
