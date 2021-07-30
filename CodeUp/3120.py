a, b = map(int, input().split())
n = abs(a-b)
cnt = 0

while(n > 0):
    if n % 5 <= 2:
        if n >= 10:
            cnt += 1
            n -= 10
        elif n >= 5:
            cnt += 1
            n -= 5
        else:
            cnt += 1
            n -= 1
    else:
        cnt += 6 + (n//10) - (n % 5)
        break

print(cnt)
