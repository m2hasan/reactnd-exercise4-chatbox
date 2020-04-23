import React from 'react';

const ChatBoxHead = (props) => {
	return (
  		<div>
         	<h2>Super Awesome Chat</h2>
            <div className="name sender">{props.user.username}</div>
         </div>
  	);
}

export default ChatBoxHead;