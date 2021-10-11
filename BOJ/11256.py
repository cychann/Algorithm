t = int(input())

for i in range(t):
    j, n = map(int, input().split())
    arr = []
    for _ in range(n):
        r, c = map(int, input().split())
        arr.append(r * c)
    arr.sort(reverse=True)
    cnt = 0
    chk = 0
    while(j > 0):
        j -= arr[chk]
        cnt += 1
        chk += 1

    print(cnt)
