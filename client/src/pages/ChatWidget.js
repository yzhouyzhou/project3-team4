import React from "react";
    import propTypes from "prop-types";

    const ChatWidget = props => {
      const { newMessage, sendMessage, handleInput, currentUser, messages } = props;

      const ChatSession = messages.map(message => {
        const user = message.senderId === currentUser.id ? "user" : "support";
        return <span className={`${user} message`}>{message.text}</span>;
      });

      return (
        <section className="chat">
          <div className="chat-widget">
            <header className="chat-header">
              <h2>Got Questions? Chat with us</h2>
            </header>
            <section className="chat-body">{ChatSession}</section>

            <form onSubmit={sendMessage} className="message-form">
              <input
                className="message-input"
                autoFocus
                name="newMessage"
                placeholder="Compose your message and hit ENTER to send"
                onChange={handleInput}
                value={newMessage}
              />
            </form>
          </div>
        </section>
      );
    };

    ChatWidget.propTypes = {
      newMessage: propTypes.string.isRequired,
      handleInput: propTypes.func.isRequired,
      sendMessage: propTypes.func.isRequired,
      messages: propTypes.arrayOf(propTypes.object).isRequired,
      currentUser: propTypes.object.isRequired
    };

    export default ChatWidget;
    