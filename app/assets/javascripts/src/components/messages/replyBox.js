// components/messages/replyBox.js
import React from 'react'
import MessagesStore from '../../stores/messages'  // 追記
import MessagesAction from '../../actions/messages' // 追記

class ReplyBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return {
      value: '',
    }
  }
  // 追記
  handleKeyDown(e) {
    if (e.keyCode === 13) {
      MessagesAction.postMessage(MessagesStore.getOpenChatUserID(), this.state.value)
      this.setState({
        value: '',
      })
    }
  }
  updateValue(e) {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    return (
      <div className='reply-box'>
        <input
          value={ this.state.value }
          onKeyDown={ this.handleKeyDown.bind(this) } // 追記
          onChange={ this.updateValue.bind(this) }
          className='reply-box__input'
          placeholder='Type message to reply..'
        />
        <span className='reply-box__tip'>
          Press <span className='reply-box__tip__button'>Enter</span> to send
        </span>
      </div>
    )
  }
}

export default ReplyBox
