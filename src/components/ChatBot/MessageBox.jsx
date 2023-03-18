import { useRef, useEffect } from "react";
import Message from "./Message";

export default function MessageBox({ messages }) {
    const bottomRef = useRef();

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <div className="chat-container">
                {messages.map((item) => (
                    <Message message={item.message} user={item?.user || false} />
                ))}
                <div ref={bottomRef} />
            </div>
        </>
    )
}