import "./Message.css"
function Message({ text, type, imgSrc, me_or_friend }) {
    if (type == "image") {
        return (
            <div className="message">
                <img src={imgSrc} />
            </div>
        );
    }
    else return (
        <div className="message">
            <p className="messageText">{text}</p>
        </div>
    );
}
export default Message;