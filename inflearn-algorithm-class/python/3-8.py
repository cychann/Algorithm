n = int(input())
a = [list(map(int, input().split())) for _ in range(n)]
m = int(input())
for i in range(m):
    x, y, z = map(int, input().split())
    if y == 0:
        for _ in range(z):
            a[x-1].append(a[x-1].pop(0))
    else:
        for _ in range(z):
            a[x-1].insert(0, a[x-1].pop())
sum = 0
middle = n//2
chk = middle
for i in range(n):
    sum += a[i][middle]
    for j in range(1, chk+1):
        sum += a[i][middle+j]
        sum += a[i][middle-j]

    if i < middle:
        chk -= 1
    else:
        chk += 1

print(sum)
