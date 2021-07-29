n = int(input())

score_list = []

for i in range(n):
    score_list.append(list(map(int, input().split())))

score_list.sort(key=lambda x: -x[2])

print(score_list[0][0], score_list[0][1])
print(score_list[1][0], score_list[1][1])

if score_list[0][0] == score_list[1][0]:
    print(score_list[3][0], score_list[3][1])
else:
    print(score_list[2][0], score_list[2][1])
