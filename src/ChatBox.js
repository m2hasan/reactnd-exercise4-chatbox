import React, {Component} from 'react';

import ChatBoxHead from './ChatBoxHead';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

class ChatBox extends Component {
  	addMessage = (messageText) => {
    	this.props.addNewMessage({
        	username: this.props.user.username,
          	text: messageText
        });
    }
	render(){
      	const messages = this.props.messages;
    	return (
        	<div className="chat-window">
              	<ChatBoxHead user={this.props.user} />
				<MessageList messages={messages} user={this.props.user}/>
				<MessageInput addMessage={this.addMessage}/>
          </div>
        );
    }
}

export default ChatBox;