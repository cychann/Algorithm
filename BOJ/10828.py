import sys

n = int(sys.stdin.readline())
stack = []

for i in range(n):
    cm = sys.stdin.readline().split()
    if cm[0] == 'push':
        stack.append(cm[1])
    elif cm[0] == 'pop':
        if stack:
            print(stack.pop())
        else:
            print(-1)
    elif cm[0] == 'size':
        print(len(stack))
    elif cm[0] == 'empty':
        if stack:
            print(0)
        else:
            print(1)
    else:
        if stack:
            print(stack[-1])
        else:
            print(-1)
