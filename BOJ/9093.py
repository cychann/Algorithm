n = int(input())

for _ in range(n):
    l = list(input().split(' '))

    for word in l:
        print(word[::-1], end=' ')
