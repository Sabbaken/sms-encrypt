import React, {Component} from 'react';

import Clipboard from 'react-clipboard.js';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import {Link} from "react-router-dom";

const encryptWithAES = (text, passphrase) => {
  return AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext, passphrase) => {
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};

class MessageCard extends Component {
  constructor(props) {
    super(props);

    let key = localStorage.getItem('key');

    this.state = {
      text: '',
      key: key
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleEncrypt = (e) => {
    if (this.state.text === '')
      return;

    localStorage.setItem('key', this.state.key);
    const encrypted = encryptWithAES(this.state.text, this.state.key);

    this.setState({
      text: encrypted
    });
  }

  handleDecrypt = (e) => {
    const decrypted = decryptWithAES(this.state.text, this.state.key);

    if (decrypted === '')
      return;

    this.setState({
      text: decrypted
    });
  }

  handleClear = (e) => {
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className="card message-card--wrapper">
        <div>
          <p className="card__title">sms-encrypt</p>

          <div>
            <p className="label">Текст</p>
            <textarea
              className="text-input text-input-large"
              name="text"
              id="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </div>

          <div>
            <p className="label">Ключ</p>
            <textarea
              className="text-input"
              name="key"
              id="key"
              onChange={this.handleChange}
              value={this.state.key}
            />
          </div>

          <div className="btn-group">
            <button className="btn btn-primary" onClick={this.handleEncrypt}><img src="./icons/lock.svg" alt="encrypt"/>
            </button>
            <button className="btn btn-primary" onClick={this.handleDecrypt}><img src="./icons/unlock.svg"
                                                                                  alt="encrypt"/></button>
            <button className="btn btn-primary" onClick={this.handleClear}><img src="./icons/send.svg" alt="encrypt"/>
            </button>
            <Clipboard data-clipboard-text={this.state.text} className="btn btn-primary">
              <img src="./icons/clipboard.svg" alt="encrypt"/>
            </Clipboard>
            <button className="btn btn-primary" onClick={this.handleClear}><img src="./icons/delete.svg" alt="encrypt"/>
            </button>
          </div>
        </div>
        <div className="message-card--links">
          <Link className="link link-secondary" to="/use">Как использовать</Link>
          <br/>
          <Link className="link link-secondary" to="/install">Добавить на главный экран</Link>
        </div>
      </div>
    );
  }
}

export default MessageCard;
