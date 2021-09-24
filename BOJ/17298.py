n = int(input())
num = list(map(int, input().split()))
stack = []
stack.append(0)
result = [-1 for _ in range(n)]


for i in range(n):
    while stack and num[stack[-1]] < num[i]:
        result[stack.pop()] = num[i]
    stack.append(i)

for i in result:
    print(i, end=' ')
