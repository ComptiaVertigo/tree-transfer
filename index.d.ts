declare module "@omegasoft/tree-transfer-list" {
    import { Component } from "react";

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

        onChange?(data: IAllTreeTransferListData): void;

        getAllTreeData(): IAllTreeTransferListData;
    }

    export function getAllTreeData(): IAllTreeTransferListData;

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

    export class TreeTransfer extends Component<ITreeTransferListProps> {}
}
