n = int(input())

for i in range(0, n):
    print(' ' * (i) + '*' * (2*(n-i)-1))

for i in range(n-2, -1, -1):
    print(' ' * (i) + '*' * (2*(n-i)-1))
