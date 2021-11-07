t = int(input())

for _ in range(t):
    n = int(input())
    m = list(map(int, input().split()))
    res = 0
    max_num = 0
    # 시간 초과 코드
    # while(True):
    #     max_num = max(m)
    #     c = m[0:m.index(max_num)+1]
    #     m = m[m.index(max_num)+1:]
    #     for i in c:
    #         res += max_num - i
    #     if len(m) == 0:
    #         break
    for i in range(n-1, -1, -1):
        if m[i] > max_num:
            max_num = m[i]
        else:
            res += max_num - m[i]

    print(res)
