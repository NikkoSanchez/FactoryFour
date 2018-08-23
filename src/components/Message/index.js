import React, { PureComponent } from 'react';
import './Message.css'
export default class Message extends PureComponent {

  render() {
    const { timeStamp, message, isEven } = this.props;
    const color = isEven ? "rgb(54,57,62)" : "rgb(43,47,53)"

    return (
      <div className='flex-container' style={{backgroundColor: color}}>
        <div className='flex-item1'>{timeStamp}</div>
        <div className='flex-item2'>{message}</div>
      </div>
    )
  }
}
