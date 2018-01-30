import React, {Component} from 'react';
import ChildComponent  from './child-comp';

export default class ParentComponent extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			parentState : false
		}
	}


	handleClick(){
		this.setState({parentState : true})
	}

	render(){
		return(
			<div className = "parent-container">
				<span>Parent Component :</span>
				<span className = "parent-info">{this.state.parentState ? ' On click of child button element clicked, parent state has changed !!':''}</span>
				<ChildComponent myClickFunc = {this.handleClick}/>
			</div>
		)
	}
}
