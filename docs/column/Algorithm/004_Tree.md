<!--
 * @Description: 
 * @Author: 李泽诚
 * @Date: 2024-03-28 16:28:27
 * @LastEditors: 李泽诚
 * @LastEditTime: 2024-05-07 11:17:03
-->
#### 深度优先遍历（DFS）
深度优先遍历沿着树的深度方向尽可能深地探索，直到到达叶子节点，然后回溯以探索其他分支。DFS主要有三种形式：前序遍历、中序遍历和后序遍历，这取决于访问节点的顺序。

###### 前序遍历：先访问根节点，然后递归遍历左子树，最后遍历右子树。

根 -> 左 -> 右
中序遍历：先递归遍历左子树，然后访问根节点，最后遍历右子树。

左 -> 根 -> 右
后序遍历：先递归遍历左子树和右子树，最后访问根节点。

左 -> 右 -> 根
广度优先遍历（BFS）
广度优先遍历则是从树的根开始，一层一层地逐层访问所有节点。它使用队列来实现，首先访问根节点，然后将根节点的所有子节点加入队列，之后依次从队列中取出节点并访问其子节点，再将这些子节点加入队列，以此类推。

队列: [根]
访问根节点 -> 
队列: [左子, 右子]
访问左子 -> 
队列: [右子, 左子的子节点们...]
...
实现示例（Python）
假设有一棵二叉树的节点定义如下：
``` python
class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
深度优先遍历（递归实现）
def dfs_preorder(root):
    if root:
        print(root.value)
        dfs_preorder(root.left)
        dfs_preorder(root.right)

def dfs_inorder(root):
    if root:
        dfs_inorder(root.left)
        print(root.value)
        dfs_inorder(root.right)

def dfs_postorder(root):
    if root:
        dfs_postorder(root.left)
        dfs_postorder(root.right)
        print(root.value)
#### 广度优先遍历
from collections import deque

def bfs(root):
    if not root:
        return
    queue = deque([root])
    while queue:
        node = queue.popleft()
        print(node.value)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
```