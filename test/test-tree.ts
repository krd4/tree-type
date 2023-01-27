import { List } from "immutable"
import { Tree, TreeNode } from "../src/tree"
import expect from "expect.js"

describe("TreeNode", function () {
    const node: TreeNode = new TreeNode("Tree", List([
        new TreeNode([0, 1, 2], List())
    ]))
    describe("constructor", function () {
        it("should accept value and children of any type", function () {
            expect(node.value).to.be.equal("Tree")
            expect(node.children instanceof List).to.be.ok()
        })
    })
})

describe("Tree", function () {
    const root: TreeNode = new TreeNode("Hello", List())
    const tree: Tree = new Tree(root)
    describe("constructor", function () {
        it("should have root", function () {
            expect(tree.root).to.be.equal(root)
        })
    })
})