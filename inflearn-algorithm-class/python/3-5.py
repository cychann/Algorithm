n, m = map(int, input().split())
num = list(map(int, input().split()))
cnt = 0
sum = 0
pos = 0

for i in range(n):
    sum += num[i]
    if(sum == m):
        cnt += 1
        sum -= num[pos]
        pos += 1
    elif(sum > m):
        while(sum > m):
            sum -= num[pos]
            pos += 1
        if(sum == m):
            cnt += 1
            sum -= num[pos]
            pos += 1
print(cnt)
