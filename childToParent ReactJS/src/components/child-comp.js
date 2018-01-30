import React, {Component} from 'react';

export default class ChildComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className = "child-container">
				<span>Child Component :</span>
				<input type = "button" className = "child-btn" onClick={this.props.myClickFunc} value = "Button"/>
			</div>
		)
	}
}
