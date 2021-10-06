import sys
t = int(sys.stdin.readline())

for _ in range(t):
    n = int(sys.stdin.readline())
    t = list(map(int, input().split()))
    t.sort()
    res = 0

    for i in range(2, n):
        l = t[i] - t[i-2]
        res = max(l, res)
    print(res)
