import './ContactEditor.css';
import { useState, memo } from 'react';

function ContactEditor({ onAddContact }) {
    const [state, setState] = useState({ name: '', contact: '' });
    const onChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

        // console.log('입력값 변경:', e.target.name, e.target.value);
    };

    const onSubmit = () => {
        if (state.name === '' || state.contact === '') {
            alert('이름과 연락처를 입력해주세요');
            return;
        }

        // console.log('추가하려는 연락처:', state.name, state.contact);  값 확인
        onAddContact(state.name, state.contact);
        setState({ name: '', contact: '' });
    };

    return (
        <div className="ContactEditor">
            <div className="title">Add Contact</div>
            <div className="input_wrapper">
                <input
                    className="name"
                    name="name"
                    onChange={onChangeState}
                    value={state.name}
                    placeholder="이름 ..."
                />
                <input
                    className="contact"
                    name="contact"
                    onChange={onChangeState}
                    value={state.contact}
                    placeholder="연락처(이메일) ..."
                />
            </div>
            <button onClick={onSubmit}>Add</button>
        </div>
    );
}
export default memo(ContactEditor);
