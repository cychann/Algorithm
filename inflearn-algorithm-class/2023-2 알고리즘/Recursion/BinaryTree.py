import sys

class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

def insert(root, data):
    if root is None:
        return Node(data)

    if data < root.data:
        root.left = insert(root.left, data)
    else:
        root.right = insert(root.right, data)

    return root


def preOrder(root):
    if root:
        print(root.data, end=" ")
        preOrder(root.left)
        preOrder(root.right)

def inOrder(root):
    if root:
        inOrder(root.left)
        print(root.data, end=" ")
        inOrder(root.right)

def postOrder(root):
    if root:
        postOrder(root.left)
        postOrder(root.right)
        print(root.data, end=" ")

def size(root):
    if root is None:
        return 0
    else:
        left_size = size(root.left)
        right_size = size(root.right)
        return left_size + right_size + 1

def height(root):
    if root is None:
        return -1
    else:
        left_height = height(root.left)
        right_height = height(root.right)
        return max(left_height, right_height) + 1

def sumOfWeight(root):
    if root is None:
        return 0
    else:
        left_sum = sumOfWeight(root.left)
        right_sum = sumOfWeight(root.right)
        return root.data + left_sum + right_sum

def maxPathWeight(root):
    if root is None:
        return 0
    
    left_sum = maxPathWeight(root.left)
    right_sum = maxPathWeight(root.right)
    
    current_sum = max(root.data, root.data + max(left_sum, right_sum))
    
    return current_sum


def mirror(root):
    if root is None:
        return
    
    root.left, root.right = root.right, root.left

    mirror(root.left)
    mirror(root.right)

def destruct(root):
    if root is None:
        return
    
    destruct(root.left)
    destruct(root.right)

    del root

case = int(sys.stdin.readline())

for i in range(case):
    node = list(map(int, sys.stdin.readline().split()))
    node.pop(0)
    root = None
    root = insert(root, node.pop(0))
    for n in node:
        insert(root, n)
    
    
    tree_size = size(root)
    print(tree_size)
    tree_height = height(root)
    print(tree_height)
    tree_weight = sumOfWeight(root)
    print(tree_weight)
    tree_max_path_weight = maxPathWeight(root)
    print(tree_max_path_weight)
    mirror(root)
    preOrder(root)
    print()
    inOrder(root)
    print()
    postOrder(root)
    print()
    destruct(root)
    root = None
    if root is None:
        print(0)
    else:
        print(1)
