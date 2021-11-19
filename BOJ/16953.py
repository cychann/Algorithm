a, b = map(int, input().split())
res = 1

while(True):
    if a == b:
        break
    elif a > b or (b % 10 != 1 and b % 2 != 0):
        res = -1
        break
    elif b % 10 == 1:
        b //= 10
        res += 1
    else:
        b //= 2
        res += 1

print(res)
