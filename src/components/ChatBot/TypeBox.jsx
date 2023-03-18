import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineSend } from "react-icons/ai";

export default function TypeBox({ messages, setMessages }) {
    const [typedMessage, setTypedMessage] = useState("");

    const onSend = () => {
        if (typedMessage) {
            setMessages([
                ...messages,
                { message: typedMessage, id: messages.length, user: true }
            ])
            setTypedMessage("")
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSend();
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between p-2 bg-white">
                <Form.Control
                    placeholder="Type message..."
                    className='w-75'
                    value={typedMessage}
                    onChange={(e) => setTypedMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <AiOutlineSend className='send-icon me-2 align-self-center' onClick={onSend} />
            </div>
        </>
    )
}