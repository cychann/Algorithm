n = int(input())
b = list(map(int, input().split()))
arrow = [0] * 100001
res = 0

for i in range(n):
    if arrow[b[i]] == 0:
        res += 1
        arrow[b[i] - 1] += 1
    else:
        arrow[b[i]] -= 1
        arrow[b[i] - 1] += 1

print(res)
