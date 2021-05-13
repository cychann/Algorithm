n = int(input())
middle = n//2
a = [list(map(int, input().split())) for _ in range(n)]
sum = 0
chk = 0
for i in range(n):
    sum += a[i][middle]
    for j in range(1, chk+1):
        sum += a[i][middle+j]
        sum += a[i][middle-j]

    if i < middle:
        chk += 1
    else:
        chk -= 1
print(sum)
