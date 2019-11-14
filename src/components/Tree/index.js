import React from 'react';
import {Input, Tree} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const dataList = [];
const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
            if (node.children.some((item) => item.key === key)) {
                parentKey = node.key;
            } else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children);
            }
        }
    }
    return parentKey;
};

class SearchTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedKeys: [],
            searchValue: '',
            autoExpandParent: true,
        };
    }

    onExpand = (expandedKeys) => {
        this.setState({
            expandedKeys,
            autoExpandParent: false
        });
    };
    onChange = (e) => {
        const value = e.target.value;
        let expandedKeys;
        if (value === '') {
            expandedKeys = [];
        } else {
            expandedKeys = this.props.dataList
                .map((item) => {
                    const titleText = `${item.title.toLowerCase()}`;
                    if (titleText.indexOf(value.toLowerCase()) > -1) {
                        return getParentKey(item.key, this.props.data);
                    }
                    return null;
                })
                .filter((item, i, self) => item && self.indexOf(item) === i);
        }
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true
        });
    };

    render() {
        const {searchValue, expandedKeys, autoExpandParent} = this.state;
        let {onSelect, showSearch, placeholder, selectedKeys} = this.props;
        const loop = (data) =>
            data.map((item) => {
                const titleText = `${item.title}`;
                const lowercaseTitleText = `${item.title.toLowerCase()}`;
                const lowercaseSearchValue = searchValue.toLowerCase();
                const index = lowercaseTitleText.indexOf(lowercaseSearchValue);
                const beforeStr = titleText.substr(0, index);
                const searchStr = titleText.substr(index, searchValue.length);
                const afterStr = titleText.substr(index + searchValue.length);
                const title =
                    index > -1 ? (
                        <span className={`tree-transfer__found-by-search tree-transfer__${item.key}`}>
							{beforeStr}
                            <span style={{color: '#f50'}}>{searchStr}</span>
                            {afterStr}
						</span>
                    ) : (
                        <span className={`tree-transfer__${item.key}`}>{titleText}</span>
                    );
                if (item.children) {
                    return (
                        <TreeNode key={item.key} title={title} className={index > -1 ? "show" : "hidden"}>
                            {loop(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode key={item.key} title={title} className={index > -1 ? "show" : "hidden"}/>;
            });
        return (
            <div style={this.props.style} className='tree-container'>
                {
                    showSearch ? <div className='tree-search'>
                        <Search placeholder={placeholder} onChange={this.onChange}/>
                    </div> : null
                }
                <div className={"tree-transfer__scroll"}>
                    <Tree
                        showLine={true}
                        onExpand={this.onExpand}
                        onSelect={onSelect}
                        selectedKeys={selectedKeys}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                    >
                        {loop(this.props.data)}
                    </Tree>
                </div>
            </div>
        );
    }
}

SearchTree.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedKeys: PropTypes.array.isRequired,
};
export default connect((state) => ({
    showSearch: state.TreeTransferData.showSearch,
    placeholder: state.TreeTransferData.placeholder
}), {})(SearchTree);
