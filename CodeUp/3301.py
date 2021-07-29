n = int(input())
cnt = 0

while(n > 0):
    if n >= 50000:
        cnt += 1
        n -= 50000
    elif n >= 10000:
        cnt += 1
        n -= 10000
    elif n >= 5000:
        cnt += 1
        n -= 5000
    elif n >= 1000:
        cnt += 1
        n -= 1000
    elif n >= 500:
        cnt += 1
        n -= 500
    elif n >= 100:
        cnt += 1
        n -= 100
    elif n >= 50:
        cnt += 1
        n -= 50
    else:
        cnt += 1
        n -= 10

print(cnt)
