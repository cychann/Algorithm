import sys

h, m, s = map(int, sys.stdin.readline().split())
t = int(sys.stdin.readline())
total = h*3600 + m*60 + s
for i in range(t):
    T = list(map(int, sys.stdin.readline().split()))

    if T[0] == 1:
        total += T[1]
        total %= 24*60*60
    elif T[0] == 2:
        total -= T[1]
        total %= 24*60*60
    else:
        H = total//3600
        M = (total % 3600)//60
        S = (total % 3600) % 60
        print(H, M, S)
