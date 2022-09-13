while(True):
    s = input()
    if s == "#":
        break
    cnt = 0
    check = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for i in s:
        if i in check:
            cnt += 1
    print(cnt)