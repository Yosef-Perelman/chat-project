import "./message.css"
function Message({ text, type, imgSrc, me_or_friend, thisTime }) {
    //IMAGES!
    if (type == "image" && me_or_friend == "me") {
        return (
            <div className="mine">
                <div class="imgblock">
                    <img src={imgSrc} />
                    <div class="smallblackarea">{thisTime}</div>
                </div>
            </div>

        );
    }
    else if (type == "image" && me_or_friend == "friend") {
        return (
            <div className="friend">
                <div class="imgblock">
                    <img src={imgSrc} />
                    <div className="smallblackarea">{thisTime}</div>
                </div>
            </div>
        );
    }

    //MESSAGES!
    else if (type == "text" && me_or_friend == "me") {
        return (
            <div className="mine">
                <div class="txtblock">
                    <p className="messageText">{text}</p>
                    <div class="smallblackarea-text">{thisTime}</div>
                </div>
            </div>
        );
    }
    else if (type == "text" && me_or_friend == "friend") {
        return (
            <div className="friend">
                <div class="txt-friend-block">

                    <p className="messageText">{text}</p>
                    <div class="smallblackarea-text">{thisTime}</div>
                </div>
            </div>
        );
    }
}
export default Message;