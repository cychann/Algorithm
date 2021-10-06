n = int(input())
res = 1
chk = 0

for i in range(1, n+1):
    res *= i

while(True):
    if res % 10 == 0:
        chk += 1
        res //= 10
    else:
        break

print(chk)
