import React from 'react';
    import propTypes from 'prop-types';

    import './Dialog.css';

    const Dialog = props => {
      const { username, handleInput, launchChat } = props;

      return (
        <div className="dialog-container">
          <div className="dialog">
            <form className="dialog-form" onSubmit={launchChat}>
              <label className="username-label" htmlFor="username">
                Enter you username
              </label>
              <input
                id="username"
                className="username-input"
                autoFocus
                type="text"
                name="userId"
                value={username}
                onChange={handleInput}
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };

    Dialog.propTypes = {
      username: propTypes.string.isRequired,
      handleInput: propTypes.func.isRequired,
      launchChat: propTypes.func.isRequired,
    };

    export default Dialog;