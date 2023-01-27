"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.TreeNode = void 0;
class TreeNode {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
}
exports.TreeNode = TreeNode;
class Tree {
    constructor(root) {
        this.root = root;
    }
}
exports.Tree = Tree;
