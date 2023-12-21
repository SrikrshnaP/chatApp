
const Message = ({ message }) => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                {message.name}
            </div>
            <div className="chat-bubble">{message.text}</div>
            {/* <div className="chat-footer opacity-50">
                Delivered
            </div> */}
        </div>
    )
}

export default Message