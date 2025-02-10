import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import { useReducer, useRef, useCallback, createContext, useMemo } from 'react';

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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

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

    const memoizedDispatches = useMemo(() => ({ onAddContact, onRemoveContact }), []);
    return (
        <div className="App">
            <ContactStateContext.Provider value={contacts}>
                <ContactDispatchContext.Provider value={memoizedDispatches}>
                    <h2>Contact List</h2>
                    <section>
                        <ContactEditor />
                    </section>
                    <section>
                        <ContactList />
                    </section>
                </ContactDispatchContext.Provider>
            </ContactStateContext.Provider>
        </div>
    );
}

export default App;
