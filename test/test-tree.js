"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const tree_1 = require("../src/tree");
const expect_js_1 = __importDefault(require("expect.js"));
describe("TreeNode", function () {
    const node = new tree_1.TreeNode("Tree", (0, immutable_1.List)([
        new tree_1.TreeNode([0, 1, 2], (0, immutable_1.List)())
    ]));
    describe("constructor()", function () {
        it("should accept value and children of any type", function () {
            (0, expect_js_1.default)(node.value).to.be.equal("Tree");
            (0, expect_js_1.default)(node.children instanceof immutable_1.List).to.be.ok();
        });
    });
    describe("includes()", function () {
        it("should return if it has an item", function () {
            (0, expect_js_1.default)(node.includes(new tree_1.TreeNode([0, 1, 2], (0, immutable_1.List)()))).to.be.ok();
        });
    });
    describe("add()", function () {
        it("should add a node to its children", function () {
            const newElement = new tree_1.TreeNode("Item", (0, immutable_1.List)());
            const added = node.add(newElement);
            (0, expect_js_1.default)(added.includes(newElement)).to.be.ok();
        });
        it("should add an element to its children", function () {
            const newElement = "Item";
            const added = node.add(newElement);
            (0, expect_js_1.default)(added.includes(new tree_1.TreeNode("Item", (0, immutable_1.List)()))).to.be.ok();
        });
    });
    describe("update()", function () {
        it("should update a node into new one", function () {
            const target = new tree_1.TreeNode([0, 1, 2], (0, immutable_1.List)());
            const newElement = new tree_1.TreeNode([0, 1, 2, 3], (0, immutable_1.List)());
            let updated = node.update(target, newElement);
            (0, expect_js_1.default)(updated.includes(target)).not.to.be.ok();
            (0, expect_js_1.default)(updated.includes(newElement)).to.be.ok();
        });
        it("should update an element into new one", function () {
            const target = new tree_1.TreeNode([0, 1, 2], (0, immutable_1.List)());
            const newElement = [0, 1, 2, 3];
            let updated = node.update(target, newElement);
            (0, expect_js_1.default)(updated.includes(target)).not.to.be.ok();
            (0, expect_js_1.default)(updated.includes(new tree_1.TreeNode([0, 1, 2, 3], (0, immutable_1.List)()))).to.be.ok();
        });
    });
    describe("delete()", function () {
        it("should delete an element from its children", function () {
            const target = new tree_1.TreeNode([0, 1, 2], (0, immutable_1.List)());
            let deleted = node.delete(target);
            (0, expect_js_1.default)(deleted.includes(target)).not.be.ok();
        });
    });
});
describe("Tree", function () {
    const root = new tree_1.TreeNode("Hello", (0, immutable_1.List)());
    const tree = new tree_1.Tree(root);
    describe("constructor()", function () {
        it("should have root", function () {
            (0, expect_js_1.default)(tree.root).to.be.equal(root);
        });
    });
});
