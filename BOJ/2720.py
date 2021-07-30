n = int(input())

for _ in range(n):
    c = int(input())

    Q = c // 25
    D = (c % 25) // 10
    N = ((c % 25) % 10) // 5
    P = (((c % 25) % 10) % 5) // 1

    print(Q, D, N, P)
