s = input()
res = 0
chk = s[0]
pq = [0, 0]
pq[int(chk)] += 1

for i in range(len(s)):
    if chk != s[i]:
        res += 1
        chk = s[i]
        pq[int(chk)] += 1

print(min(pq))
