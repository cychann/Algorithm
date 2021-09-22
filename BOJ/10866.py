import sys
from collections import deque

n = int(sys.stdin.readline())
dq = deque()
for i in range(n):
    cm = sys.stdin.readline().split()
    if cm[0] == 'push_front':
        dq.appendleft(cm[1])
    elif cm[0] == 'push_back':
        dq.append(cm[1])
    elif cm[0] == 'pop_front':
        if dq:
            print(dq.popleft())
        else:
            print(-1)
    elif cm[0] == 'pop_back':
        if dq:
            print(dq.pop())
        else:
            print(-1)
    elif cm[0] == 'size':
        print(len(dq))
    elif cm[0] == 'empty':
        if dq:
            print(0)
        else:
            print(1)
    elif cm[0] == 'front':
        if dq:
            print(dq[0])
        else:
            print(-1)
    else:
        if dq:
            print(dq[len(dq)-1])
        else:
            print(-1)
