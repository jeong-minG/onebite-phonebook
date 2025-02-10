import './ContactList.css';
import ContactItem from './ContactItem';
import { useContext } from 'react';
import { ContactStateContext } from '../App';

export default function ContactList() {
    const contacts = useContext(ContactStateContext);
    return (
        <div className="ContactList">
            <div className="title">Contact List</div>
            {contacts.map((contact) => {
                return <ContactItem key={contact.id} {...contact} />;
            })}
        </div>
    );
}
