def hanoiTower(n, a, b, c, k):
    if n <= 1:
        print(a, c)
        return

    if k == 2**(n-1):
        print(a, c)
        return 
    elif k <= 2**(n-1):
        hanoiTower(n-1, a, c, b, k)
    else:
        hanoiTower(n-1, b, a, c, k - 2**(n-1))

case = int(input())
for _ in range(case):
    n, k = map(int, input().split())
    hanoiTower(n, 1, 2, 3, k)

