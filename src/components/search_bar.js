import React, { Component } from 'react'; //import react and pullof component

/*Functional component
const SearchBar = () => {
	return <input/>
};*/

/*Class component*/
//<input onChange={e=>this.setState({term: e.target.value})}/>
//If the input value is the state object var you turn the element into a controlled cmomponent.
//State is a plain js object to mostrar el state. Si state se cambia se hace rerender del componente.


//SETSTATE RE-RENDERS THE COMPONENT!!
class SearchBar extends Component{

	constructor(props){
		//initialize states. 
		super(props);
		this.state = {term: 'Dog'};
	}

	render() {
		return (
			<div>
				<input 
				value={this.state.term}
				onChange={e=>this.setState({term: e.target.value})}/>
			</div>
		);

	}

	onInputChange(e){

	}
}

export default SearchBar;