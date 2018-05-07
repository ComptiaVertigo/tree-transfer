import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TreeTransfer,getAllTreeData} from '../index';
import Data from './data.json';
const leftTree = Data;
const rightTree = [];

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}
	handleClick =()=>{
		console.log(getAllTreeData());
	}
	render() {
		return (
			<div style={{ height: '400px' }}>
				<button onClick={this.handleClick}>获取数据</button>
				<TreeTransfer getAllTreeData={getAllTreeData} leftTreeData={ leftTree } rightTreeData={ rightTree} leftTitle={'左树'} rightTitle={'右树'}/>	
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector('#app'));
