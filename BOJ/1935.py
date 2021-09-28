n = int(input())
c = list(input())
num = [0] * n
for i in range(n):
    num[i] = int(input())
stack = []

for i in c:
    if i.isalpha():
        stack.append(num[ord(i) - 65])
    else:
        n1 = stack.pop()
        n2 = stack.pop()

        if i == '+':
            stack.append(n2 + n1)
        elif i == '-':
            stack.append(n2 - n1)
        elif i == '*':
            stack.append(n2 * n1)
        else:
            stack.append(n2 / n1)

print('%.2f' % stack[0])
