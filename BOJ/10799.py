c = list(input())
stack = []
result = 0

for i in range(len(c)):
    if c[i] == '(':
        stack.append(i)
    else:
        if c[i-1] == '(':
            stack.pop()
            result += len(stack)
        else:
            result += 1
            stack.pop()
print(result)
