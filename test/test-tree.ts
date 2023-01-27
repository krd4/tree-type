import { List } from "immutable"
import { Tree, TreeNode } from "../src/tree"
import expect from "expect.js"

describe("TreeNode", function () {
    const node: TreeNode = new TreeNode("Tree", List([
        new TreeNode([0, 1, 2], List())
    ]))
    describe("constructor()", function () {
        it("should accept value and children of any type", function () {
            expect(node.value).to.be.equal("Tree")
            expect(node.children instanceof List).to.be.ok()
        })
    })
    describe("includes()", function () {
        it("should return if it has an item", function () {
            expect(node.includes(new TreeNode([0, 1, 2], List()))).to.be.ok()
        })
    })
    describe("add()", function () {
        it("should add a node to its children", function () {
            const newElement = new TreeNode("Item", List())
            const added = node.add(newElement)

            expect(added.includes(newElement)).to.be.ok()
        })

        it("should add an element to its children", function () {
            const newElement = "Item"
            const added = node.add(newElement)

            expect(added.includes(new TreeNode("Item", List()))).to.be.ok()
        })
    })
    describe("update()", function () {
        it("should update a node into new one", function () {
            const target = new TreeNode([0, 1, 2], List())
            const newElement = new TreeNode([0, 1, 2, 3], List())
            let updated = node.update(target, newElement)

            expect(updated.includes(target)).not.to.be.ok()
            expect(updated.includes(newElement)).to.be.ok()
        })

        it("should update an element into new one", function () {
            const target = new TreeNode([0, 1, 2], List())
            const newElement = [0, 1, 2, 3]
            let updated = node.update(target, newElement)

            expect(updated.includes(target)).not.to.be.ok()
            expect(updated.includes(new TreeNode([0, 1, 2, 3], List()))).to.be.ok()
        })
    })
    describe("delete()", function () {
        it("should delete an element from its children", function () {
            const target = new TreeNode([0, 1, 2], List())
            let deleted = node.delete(target)

            expect(deleted.includes(target)).not.be.ok()
        })
    })
})

describe("Tree", function () {
    const root: TreeNode = new TreeNode("Hello", List())
    const tree: Tree = new Tree(root)
    describe("constructor()", function () {
        it("should have root", function () {
            expect(tree.root).to.be.equal(root)
        })
    })
})