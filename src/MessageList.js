import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
	render() {
    	return (
        	<ul className="message-list">
            	{this.props.messages.map((message, index) => (
          			<Message key={index} message={message} messageClass={message.username===this.props.user.username ? 'message sender' : 'message recipient'} />
                ))}
            </ul>
        );
    }
}

export default MessageList;