n, m = map(int, input().split())
p = []

for i in range(m):
    p.append(int(input()))
p.sort()
sum = 0
price = 0
for i in range(m):
    idx = min(m-i, n)
    if p[i] * (idx) > sum:
        price = p[i]
        sum = p[i] * (idx)

print(price, sum)
