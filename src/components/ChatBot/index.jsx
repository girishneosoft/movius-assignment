import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap"
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import "./style.css";
import MessageData from "./../../__mock__/messages.json"
import MessageBox from "./MessageBox";
import TypeBox from "./TypeBox";

export default function ChatBot() {
    const [messages, setMessages] = useState(MessageData);
    const [openChatBot, setOpenChatBot] = useState(false);

    return (
        <>
            <div className={`bot-btn-wrapper`}>
                <Button variant="primary" className="bot-btn" onClick={() => setOpenChatBot(!openChatBot)}>
                    {openChatBot ? <AiFillCloseCircle /> : <BsFillChatDotsFill />}
                </Button>
            </div>

            <Modal
                show={openChatBot}
                onHide={() => setOpenChatBot(false)}
                dialogClassName="chatboat-modal"
                centered
            >
                <Modal.Body>
                    <div className='chatbot-container'>
                        <div className='chatbot-header d-flex justify-content-between'>
                            <h5 className='mb-0'>How can I help you?</h5>
                            <AiFillCloseCircle onClick={() => setOpenChatBot(false)} className='modal-close-icon' />
                        </div>
                        <MessageBox messages={messages} />
                        <TypeBox messages={messages} setMessages={setMessages} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}