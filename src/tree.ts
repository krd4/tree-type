import { List } from "immutable"
import _ from "lodash"

export class TreeNode {
    constructor(
        public value: any,
        public children: List<TreeNode>
    ) { }

    includes(x: TreeNode): boolean {
        return this.children.findIndex((v, k, iter) => v.equals(x)) != -1
    }

    add(x: any): TreeNode {
        if (x instanceof TreeNode) return new TreeNode(
            this.value,
            this.children.push(
                x
            )
        )

        return new TreeNode(
            this.value,
            this.children.push(
                new TreeNode(x, List())
            )
        )
    }


    update(target: TreeNode, x: any): TreeNode {
        const target_index = this.children.findIndex((v, k, iter) => v.equals(target))
        if (target_index == -1) return this
        if (x instanceof TreeNode) return new TreeNode(
            this.value,
            this.children.update(
                target_index,
                val => x
            )
        )

        return new TreeNode(
            this.value,
            this.children.update(
                target_index,
                val => new TreeNode(x, List())
            )
        )

    }

    delete(target: any): TreeNode {
        const target_index = this.children.findIndex((v, k, iter) => v.equals(target))
        if (target_index == -1) return this
        return new TreeNode(
            this.value,
            this.children.remove(target_index)
        )
    }

    equals(other: TreeNode): boolean {
        return _.isEqual(this, other)
    }
}

export class Tree {
    constructor(public root: TreeNode) { }
}