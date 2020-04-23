import React, {Component} from 'react';

class MessageInput extends Component {
  	state= {
    	value: ''
    }
	handleChange = (event) => {
      	this.setState({
        	value: event.target.value
        });
    }
	handleSubmit = (event) => {
    	event.preventDefault();
      	this.props.addMessage(this.state.value);
        this.setState({
         	value: ''
        });
    }
  	isDisabled = () => {
    	return this.state.value === '';
  	};
	render() {
    	return (
        	<div>
            	<form className="input-group" onSubmit={this.handleSubmit}>
                	<input 
             			type="text"
             			className="form-control" 
             			placeholder="Enter your message..."
             			value={this.state.value}
            			onChange= {this.handleChange}
             			/>
                    <div className="input-group-append">
                    	<button className="btn submit-button" disabled={this.isDisabled()}>SEND</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MessageInput;