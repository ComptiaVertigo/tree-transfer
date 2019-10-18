declare module "tree-transfer-list" {
    import * as React from "react";

    export interface ITreeTransferListProps {
        leftTreeData: ITreeTransferListItem[];
        rightTreeData: ITreeTransferListItem[];
        leftTitle: string;
        rightTitle: string;
        treeWidth?: number;
        treeHeight?: number;
        showSearch?: boolean;
        transferBtns?: ITreeTransferListBtns[];
        placeholder?: string;

        onChange?(): IAllTreeTransferListData;

        getAllTreeData(): IAllTreeTransferListData;
    }

    export interface ITreeTransferListItem {
        key?: string;
        title: string;
        parentKey?: string;
    }

    export interface IAllTreeTransferListData {
        leftTreeData: ITreeTransferListItem[];
        rightTreeData: ITreeTransferListItem[];
    }

    export interface ITreeTransferListBtns {
        key: "allToRight" | "toRight" | "tolLeft" | "allToLeft";
        name: string;
        className?: string;
    }

    export class TreeTransferList extends React.Component<ITreeTransferListProps> {}
}
