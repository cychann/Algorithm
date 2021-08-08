n = int(input())
s = input()
c = 0

for i in range(n):
    if s[i] == 'L':
        c += 1
c //= 2

print(min(n+1-c, n))
