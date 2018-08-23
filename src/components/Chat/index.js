import React, { Component } from 'react';
import Message from '../Message';
import FakeMessages from '../../../messages.json';
import './Chat.css';

export default class Chat extends Component {
  
  state = {
      messageList: [],
      message: ''
  }

  componentDidMount() {
    this.setState({ messageList: [...FakeMessages.messages] });
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  handleMessage = (e) => {
    const message = e.target.value;
    this.setState({ message });
  }

  handleSend = () => {
    const newMessage = {};
    const { messageList } = this.state;
    
    newMessage.timeStamp = new Date().toLocaleString();
    newMessage.message = this.state.message;

    messageList.push(newMessage);
    this.setState({ messageList, message: '' }, () => {
      this.scrollToBottom()
    })
  }

  handleEnterKey = (e) => {
    e.keyCode === 13 && this.handleSend()
  }

  render() {
    const { messageList, message } = this.state;
    
    return (
      <div align='center'>
        <div className='chat-container'>
          {messageList && messageList.map((val, i) => {
            return (
              <div key={i}>
                <Message timeStamp={val.timeStamp} message={val.message} isEven={i%2===0}/>
              </div>
            )
          })}
          <div ref={el => {
            this.messagesEnd = el;
          }}></div>
        </div>
        <div>
          <br/>
          <input placeholder='New Message' value={message} onChange={this.handleMessage} onKeyUp={this.handleEnterKey}></input>
          <button className='send-button' onClick={this.handleSend}>Send</button>
        </div>
      </div>
    )
  }
}
