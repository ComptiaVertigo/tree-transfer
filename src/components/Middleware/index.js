import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
	setLeftTreeArray,
	setRightTreeArray,
	setAllTreeArray,
	setLeftTitle,
	setRightTitle
} from 'Store/action';
import Transfer from 'Components/Transfer';

class Middleware extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		let {
			leftTreeData,
			rightTreeData,
			leftTitle,
			rightTitle,
			setAllTreeArray,
			setLeftTreeArray,
			setRightTreeArray,
			setLeftTitle,
			setRightTitle
		} = this.props;
		setAllTreeArray(leftTreeData.concat(rightTreeData));
		setLeftTreeArray(leftTreeData);
		setRightTreeArray(rightTreeData);
		setLeftTitle(leftTitle);
		setRightTitle(rightTitle);
	}
	render() {
		return <Transfer / > ;
	}
}
Middleware.propTypes = {
	leftTreeData: PropTypes.array.isRequired,
	rightTreeData: PropTypes.array.isRequired,
	setAllTreeArray: PropTypes.func.isRequired,
	setLeftTreeArray: PropTypes.func.isRequired,
	setRightTreeArray: PropTypes.func.isRequired,
	leftTitle: PropTypes.string.isRequired,
	rightTitle: PropTypes.string.isRequired,
	setLeftTitle: PropTypes.func.isRequired,
	setRightTitle: PropTypes.func.isRequired,
};
export default connect((state) => ({}), {
	setAllTreeArray,
	setLeftTreeArray,
	setRightTreeArray,
	setLeftTitle,
	setRightTitle
})(Middleware);