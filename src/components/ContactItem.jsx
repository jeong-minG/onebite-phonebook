import './ContactItem.css';
import { memo, useContext } from 'react';
import { ContactDispatchContext } from '../App';

function ContactItem({ id, name, contact }) {
    const { onRemoveContact } = useContext(ContactDispatchContext);
    return (
        <div className="ContactItem">
            <div className="name">{name}</div>
            <div className="contact">{contact}</div>
            <button
                onClick={() => {
                    onRemoveContact(id);
                }}
            >
                🗑 Remove
            </button>
        </div>
    );
}
export default memo(ContactItem);
