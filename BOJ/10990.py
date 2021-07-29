n = int(input())

print(' ' * (n-1) + '*')
for i in range(1, n):
    print(' ' * (n-i-1) + '*' + ' ' * (2*i-1) + '*')
