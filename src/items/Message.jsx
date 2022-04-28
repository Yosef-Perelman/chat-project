import "./message.css"
function Message({ text, type, imgSrc, me_or_friend }) {
    var time = new Date();
    //IMAGES!
    if (type == "image" && me_or_friend == "me") {
        return (
            <div className="mine">
                <div class="imgblock">
                    <img src={imgSrc} />
                    <div class="smallblackarea">{time.getHours() + ":" + time.getMinutes()}</div>
                </div>
            </div>

        );
    }
    else if (type == "image" && me_or_friend == "friend") {
        return (
            <div className="friend">
                <div class="imgblock">
                    <img src={imgSrc} />
                    <div className="smallblackarea">{time.getHours() + ":" + time.getMinutes()}</div>
                </div>
            </div>
        );
    }

    //MESSAGES!
    else if (type == "text" && me_or_friend == "me") {
        return (
            <div className="mine">
                <div class="imgblock">
                    <p className="messageText">{text}</p>
                    <div class="smallblackarea-text">{time.getHours() + ":" + time.getMinutes()}</div>
                </div>
            </div>
        );
    }
    else if (type == "text" && me_or_friend == "friend") {
        return (
            <div className="friend">
                <p className="messageText">{text}</p>
            </div>
        );
    }
}
export default Message;