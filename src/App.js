import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatBoxesList from './ChatBoxesList';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
	state = {
  		users: [{ username: 'Amy' }, { username: 'John' }, { username: 'Masum' }],
   		messages: [
    		{ username: 'Amy', text: 'Hi, Jon!' },
        	{ username: 'Amy', text: 'How are you?' },
        	{ username: 'John', text: 'Hi, Amy! Good, you?' },
    	]
  	}
  	addNewMessage = (message) => {
    	this.setState((curState) => ({
        	messages: [...curState.messages, message]
        }))
  	}

	render() {
		return (
			<div className="App">
       			<header className="App-header">
          			<img src={logo} className="App-logo" alt="logo" />
          			<h1 className="App-title">ReactND - Coding Practice</h1>
       			</header>
        		<ChatBoxesList users={this.state.users} messages={this.state.messages} addNewMessage={this.addNewMessage} />
      		</div>
    	);
  	}
}

export default App;
