export default function Message({ message, user }) {
    return (
        <>
            <div className={`d-flex ${user ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`chat-message ${user && 'chat-message-user'}`}>
                    {message}
                </div>
            </div>
        </>
    )
}