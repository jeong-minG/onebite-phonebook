import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import { useReducer, useRef, useCallback } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [action.data, ...state];
        case 'REMOVE_CONTACT':
            return state.filter((it) => it.id !== action.targetId);
        default:
            return state;
    }
};

function App() {
    const [contacts, dispatch] = useReducer(reducer, []);

    const idRef = useRef(0);

    /* 새로운 연락처 추가 */
    const onAddContact = useCallback((name, contact) => {
        dispatch({
            type: 'ADD_CONTACT',
            data: {
                id: idRef.current++,
                name,
                contact,
            },
        });
    }, []);

    /* 기존 연락처 삭제 */
    const onRemoveContact = useCallback((targetId) => {
        dispatch({ type: 'REMOVE_CONTACT', targetId });
    }, []);

    return (
        <div className="App">
            <h2>Contact List</h2>
            <section>
                <ContactEditor onAddContact={onAddContact} />
            </section>
            <section>
                <ContactList onRemoveContact={onRemoveContact} contacts={contacts} />
            </section>
        </div>
    );
}

export default App;
