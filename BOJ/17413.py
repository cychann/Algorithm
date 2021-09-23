from collections import deque
dq = deque()
stack = []
result = ''
chk = 0
s = list(input())

for i in s:
    if i == '<':
        while stack:
            result += stack.pop()
        dq.append(i)
        chk = 1
    elif i == '>':
        dq.append(i)
        while dq:
            result += dq.popleft()
        chk = 0
    elif i == ' ':
        if chk == 0:
            while stack:
                result += stack.pop()
            result += ' '
        else:
            dq.append(i)
            while dq:
                result += dq.popleft()
    else:
        if chk == 0:
            stack.append(i)
        else:
            dq.append(i)

while stack:
    result += stack.pop()

print(result)
