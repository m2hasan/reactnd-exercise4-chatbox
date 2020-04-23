import React, {Component} from 'react';
import ChatBox from './ChatBox';

class ChatBoxesList extends Component {
	render() {
      const users = this.props.users;
      const messages = this.props.messages;
    	return (
        	<div className="container">
          		{users.map((user) => (
          			<ChatBox key={user.username} user={user} messages={messages} addNewMessage={this.props.addNewMessage} />
        		))}
          	</div>
        );
    }
}

export default ChatBoxesList;