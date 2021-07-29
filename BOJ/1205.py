import sys

n, score, p = map(int, input().split())

score_list = list(map(int, sys.stdin.readline().split()))


if n == p and score_list[n-1] >= score:
    print(-1)
else:
    rank = 1
    for i in range(n):
        if score_list[i] > score:
            rank += 1
    print(rank)
