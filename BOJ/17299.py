import sys

n = int(sys.stdin.readline())
num = list(map(int, sys.stdin.readline().split()))
fa = []
fa_result = [0] * 1000001

for i in num:
    fa_result[i] += 1


stack = []
stack.append(0)
result = [-1 for _ in range(n)]


for i in range(n):
    while stack and fa_result[num[stack[-1]]] < fa_result[num[i]]:
        result[stack.pop()] = num[i]
    stack.append(i)

for x in result:
    print(x, end=' ')
