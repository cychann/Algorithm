import sys

n = int(sys.stdin.readline())
queue = []

for i in range(n):
    cm = sys.stdin.readline().split()
    if cm[0] == 'push':
        queue.append(cm[1])
    elif cm[0] == 'pop':
        if queue:
            print(queue.pop(0))
        else:
            print(-1)
    elif cm[0] == 'size':
        print(len(queue))
    elif cm[0] == 'empty':
        if queue:
            print(0)
        else:
            print(1)
    elif cm[0] == 'front':
        if queue:
            print(queue[0])
        else:
            print(-1)
    else:
        if queue:
            print(queue[len(queue) - 1])
        else:
            print(-1)
