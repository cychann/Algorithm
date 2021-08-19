s = int(input())
cnt = 0
total = 0

while(s > total):
    cnt += 1
    total += cnt
    if total > s:
        cnt -= 1
        break

print(cnt)
