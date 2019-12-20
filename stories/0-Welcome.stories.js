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
  {
    "key": "Albania",
    "title": "Albania",
    "parentKey": "Austratia",
  },
  {
    "key": "Armenia",
    "title": "Armenia",
    "parentKey": "Austratia",
  },
  {
    "key": "Azerbaijan",
    "title": "Azerbaijan",
    "parentKey": "Austratia",
  },
  {
    "key": "Belarus",
    "title": "Belarus",
    "parentKey": "Austratia",
  },
  {
    "key": "Belgium",
    "title": "Belgium",
    "parentKey": "Austratia",
  },
  {
    "key": "Bulgaria",
    "title": "Bulgaria",
    "parentKey": "Austratia",
  },
  {
    "key": "Croatia",
    "title": "Croatia",
    "parentKey": "Austratia",
  },
  {
    "key": "Cyprus",
    "title": "Cyprus",
    "parentKey": "Austratia",
  },
  {
    "key": "Czech Republic",
    "title": "Czech Republic",
    "parentKey": "Austratia",
  },
  {
    "key": "Denmark",
    "title": "Denmark",
    "parentKey": "Austratia",
  },
  {
    "key": "Estonia",
    "title": "Estonia",
    "parentKey": "Austratia",
  },
  {
    "key": "Finland",
    "title": "Finland",
    "parentKey": "Austratia",
  },
  {
    "key": "France",
    "title": "France",
    "parentKey": "Austratia",
  },
  {
    "key": "Georgia",
    "title": "Georgia",
    "parentKey": "Austratia",
  },
  {
    "key": "Germany",
    "title": "Germany",
    "parentKey": "Austratia",
  },
  {
    "key": "Greece",
    "title": "Greece",
    "parentKey": "Austratia",
  },
  {
    "key": "Hungary",
    "title": "Hungary",
    "parentKey": "Austratia",
  },
  {
    "key": "Iceland",
    "title": "Iceland",
    "parentKey": "Austratia",
  },
  {
    "key": "Ireland",
    "title": "Ireland",
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
