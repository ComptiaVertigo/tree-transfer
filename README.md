<p align="center">
  <h3 align="center">Tree Transfer</h3>

  <p align="center">
    <a href="https://github.com/ComptiaVertigo/tree-transfer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ComptiaVertigo/tree-transfer">Repository</a>
    ·
    <a href="https://github.com/ComptiaVertigo/tree-transfer/issues">Report Bug</a>
    ·
    <a href="https://github.com/ComptiaVertigo/tree-transfer/issues">Request Feature</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)


<!-- ABOUT THE PROJECT -->
## About The Project
React tree transfer Component with antd
Fork from https://github.com/glud123/tree-transfer (last updated at 9 May 2018)


<!-- BUILD WITH -->
## Built With

-   [React](https://reactjs.org/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/ComptiaVertigo/tree-transfer.git
```
2. Install NPM packages
```sh
npm install
```
3. Run
```sh
npm run dev
```

<!-- USAGE EXAMPLES -->
## Usage
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

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ComptiaVertigo/tree-transfer/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Omega (ex Omega-R): [omega-r.com](https://omega-r.com/) develop@omega-r.com

Alexander Zolotykh - alex.zolotyh@omega-r.com

Tatyana Tsepeleva - tatyana.tsepeleva@omega-r.com

Project Link: [ComptiaVertigo/tree-transfer](https://github.com/ComptiaVertigo/tree-transfer)
