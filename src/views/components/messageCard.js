import React, {Component} from 'react';

import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

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

    this.state = {
      text: '',
      key: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleEncrypt = (e) => {
    const encrypted = encryptWithAES(this.state.text, this.state.key);

    this.setState({
      text: encrypted
    });
  }

  handleDecrypt = (e) => {
    const decrypted = decryptWithAES(this.state.text, this.state.key);

    this.setState({
      text: decrypted
    });
  }

  handleClear = (e) => {
    this.setState({
      text: ''
    });
  }

  handleCopy = (e) => {
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className="card">
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
          />
        </div>

        <div className="btn-group">
          <button className="btn btn-primary" onClick={this.handleEncrypt}><img src="./icons/lock.svg" alt="encrypt"/></button>
          <button className="btn btn-primary" onClick={this.handleDecrypt}><img src="./icons/unlock.svg" alt="encrypt"/></button>
          <button className="btn btn-primary" onClick={this.handleClear}><img src="./icons/send.svg" alt="encrypt"/></button>
          <button className="btn btn-primary" onClick={this.handleClear}><img src="./icons/clipboard.svg" alt="encrypt"/></button>
          <button className="btn btn-primary" onClick={this.handleClear}><img src="./icons/delete.svg" alt="encrypt"/></button>
        </div>

        <div>
          {/*<a className="link link-secondary" href="/#">Добавить на главный экран</a>*/}
        </div>
      </div>
    );
  }
}

export default MessageCard;
