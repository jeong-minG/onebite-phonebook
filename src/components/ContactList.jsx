import './ContactList.css';
import ContactItem from './ContactItem';

export default function ContactList({ onRemoveContact, contacts }) {
    return (
        <div className="ContactList">
            <div className="title">Contact List</div>
            {contacts.map((contact) => {
                return <ContactItem key={contact.id} {...contact} onRemoveContact={onRemoveContact} />;
            })}
        </div>
    );
}
