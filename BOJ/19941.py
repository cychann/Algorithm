n, k = map(int, input().split())
ph = list(map(str, input()))
cnt = 0

for i in range(n):
    if ph[i] == "P":
        for j in range(i-k, i+k+1):
            if 0 <= j < n and ph[j] == "H":
                cnt += 1
                ph[j] = 'check'
                break
print(cnt)
