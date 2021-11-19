n, k = map(int, input().split())
cnt = 0
while(True):
    if bin(n).count('1') <= k:
        break
    n += 1
    cnt += 1

print(cnt)
