import React, {Component} from 'react';

class MessageCard extends Component {
  render() {
    return (
      <div className="card">
        <p className="card__title">sms-encrypt</p>
        <div>
          <p className="label">Текст</p>
          <textarea className="text-input text-input-large" name="text" id="text"/>
        </div>

        <div>
          <p className="label">Ключ</p>
          <textarea className="text-input" name="key" id="key"/>
        </div>

        <div className="btn-group">
          <button className="btn btn-primary"><img src="./icons/lock.svg" alt="encrypt"/></button>
          <button className="btn btn-primary"><img src="./icons/unlock.svg" alt="encrypt"/></button>
          <button className="btn btn-primary"><img src="./icons/send.svg" alt="encrypt"/></button>
          <button className="btn btn-primary"><img src="./icons/clipboard.svg" alt="encrypt"/></button>
          <button className="btn btn-primary"><img src="./icons/delete.svg" alt="encrypt"/></button>
        </div>

        <div>
          <a className="link link-secondary" href="/#">Добавить на главный экран</a>
        </div>
      </div>
    );
  }
}

export default MessageCard;
