n, k = map(int, input().split())

s = k*(k+1) // 2

if (n-s) % k == 0:
    print(k-1)
elif s > n:
    print(-1)
else:
    print(k)
