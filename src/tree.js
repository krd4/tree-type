"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.TreeNode = void 0;
const immutable_1 = require("immutable");
const lodash_1 = __importDefault(require("lodash"));
class TreeNode {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
    includes(x) {
        return this.children.findIndex((v, k, iter) => v.equals(x)) != -1;
    }
    add(x) {
        if (x instanceof TreeNode)
            return new TreeNode(this.value, this.children.push(x));
        return new TreeNode(this.value, this.children.push(new TreeNode(x, (0, immutable_1.List)())));
    }
    update(target, x) {
        const target_index = this.children.findIndex((v, k, iter) => v.equals(target));
        if (target_index == -1)
            return this;
        if (x instanceof TreeNode)
            return new TreeNode(this.value, this.children.update(target_index, val => x));
        return new TreeNode(this.value, this.children.update(target_index, val => new TreeNode(x, (0, immutable_1.List)())));
    }
    delete(target) {
        const target_index = this.children.findIndex((v, k, iter) => v.equals(target));
        if (target_index == -1)
            return this;
        return new TreeNode(this.value, this.children.remove(target_index));
    }
    equals(other) {
        return lodash_1.default.isEqual(this, other);
    }
}
exports.TreeNode = TreeNode;
class Tree {
    constructor(root) {
        this.root = root;
    }
}
exports.Tree = Tree;
