n = int(input())
for _ in range(n):
    vps = list(input())
    sum = 0
    for v in vps:
        if v == '(':
            sum += 1
        else:
            sum -= 1
        if sum < 0:
            print("NO")
            break
    if sum > 0:
        print('NO')
    elif sum == 0:
        print('YES')
