n = int(input())
milk_list = list(map(int, input().split()))
cnt = 0
chk = 0

for i in range(len(milk_list)):
    if chk == 0:
        if milk_list[i] == 0:
            cnt += 1
            chk = 1
    elif chk == 1:
        if milk_list[i] == 1:
            cnt += 1
            chk = 2
    else:
        if milk_list[i] == 2:
            cnt += 1
            chk = 0

print(cnt)
