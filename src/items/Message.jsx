import "./message.css"
function Message({ text }) {
    return (
        <div className="message">
            <p className="messageText">{text}</p>
        </div>
    );
}
export default Message;