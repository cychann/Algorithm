n = int(input())
d = list(map(int, input().split()))
p = list(map(int, input().split()))
mp = p[0]
res = 0

for i in range(n-1):
    if p[i] < mp:
        mp = p[i]

    res += mp * d[i]

print(res)
