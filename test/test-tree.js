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
    describe("constructor", function () {
        it("should accept value and children of any type", function () {
            (0, expect_js_1.default)(node.value).to.be.equal("Tree");
            (0, expect_js_1.default)(node.children instanceof immutable_1.List).to.be.ok();
        });
    });
});
describe("Tree", function () {
    const root = new tree_1.TreeNode("Hello", (0, immutable_1.List)());
    const tree = new tree_1.Tree(root);
    describe("constructor", function () {
        it("should have root", function () {
            (0, expect_js_1.default)(tree.root).to.be.equal(root);
        });
    });
});
