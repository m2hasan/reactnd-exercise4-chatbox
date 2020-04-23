import React from 'react';

const Message = (props) => {
	return (
    	<li className={ props.messageClass }>
        	<p>{`${props.message.username}: ${props.message.text}`}</p>
        </li>
    );
}

export default Message;