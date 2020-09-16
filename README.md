## tree-transfer
---
React tree transfer Component with antd

Fork from https://github.com/glud123/tree-transfer (last updated at 9 May 2018)

### Install
```
npm i tree-transfer -S
```
### Example
```
npm i 

npm run dev
```

### Usage
```javaScript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TreeTransfer,getAllTreeData} from 'tree-transfer';
const Data = [
	{
		"key": "0-0",
		"title": "T0-0"
	},
	{
		"key": "0-0-0",
		"title": "T0-0-0",
		"parentKey": "0-0"
	},
	{
		"key": "0-0-0-0",
		"title": "T0-0-0-0",
		"parentKey": "0-0-0"
	},
	{
		"key": "0-0-0-0-0",
		"title": "T0-0-0-0-0",
		"parentKey": "0-0-0-0"
	}
];
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
		return (<div style={{ height: '500px' }}>
				<TreeTransfer 
				placeholder={'Search'}
				showSearch={true} 
				treeWidth={250}
				treeHeight={400}
				getAllTreeData={getAllTreeData} leftTreeData={ leftTree } rightTreeData={ rightTree} 
				leftTitle={'Left'} 
				rightTitle={'Right'}/>	
				<button onClick={this.handleClick}>Tree</button>
			</div>
		);
	}
}
ReactDOM.render(<App />,document.querySelector('#app'));

###
```javaScript
// transferBtns
[{
	key: 'allToRight',
	name: '>>',
	className: ''
},
{
	key: 'toRight',
	name: '>',
	className: ''
},
{
	key: 'tolLeft',
	name: '<',
	className: ''
},
{
	key: 'allToLeft',
	name: '<<',
	className: ''
}]
```
|||
|-|-|-|
|key|string|['allToRight','toRight','tolLeft','allToLeft']|
|name|string|——|
|className|string|——|
