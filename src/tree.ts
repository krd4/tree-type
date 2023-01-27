import { List } from "immutable"

export class TreeNode {
    constructor(
        public value: any,
        public children: List<TreeNode>
    ) { }
}

export class Tree {
    constructor(public root: TreeNode) { }
}