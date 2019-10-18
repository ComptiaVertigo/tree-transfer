import React from 'react';

import TreeTransferLib from "../lib";

const { TreeTransfer, getAllTreeData } = TreeTransferLib;

const Data = [
  {
    "key": "Austratia",
    "title": "Austratia",
  },
  {
    "key": "Russia",
    "title": "Russia",
    "parentKey": "Austratia",
  },
  {
    "key": "001",
    "title": "001",
    "parentKey": "01",
  },
  {
    "key": "002",
    "title": "002",
    "parentKey": "01",
  },
  {
    "key": "3",
    "title": "3",
  },
  {
    "key": "4",
    "title": "4",
  },
  {
    "key": "Russia1",
    "title": "Russia1",
    "parentKey": "Austratia",
  },
];
const leftTree = Data;
const rightTree = [];

export default {
  title: 'Welcome',
};

export const toStorybook = () => (
    <div>
      <TreeTransfer
          placeholder={"Search"}
          showSearch={true}
          treeWidth={250}
          treeHeight={400}
          getAllTreeData={getAllTreeData}
          leftTreeData={leftTree}
          rightTreeData={rightTree}
          leftTitle={"左树"}
          rightTitle={"右树"}
          onChange={(data) => console.log("onChange", data)}
      />
      <button onClick={() => {console.log(getAllTreeData())}}>get data</button>
    </div>
);

toStorybook.story = {
  name: 'to Storybook',
};
