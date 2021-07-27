num_list = []
total = 0
for _ in range(8):
    n = int(input())
    num_list.append(n)

chk_list = num_list[:]
num_list.sort(reverse=True)

for i in range(5):
    total += num_list[i]
print(total)

result_list = []
for i in range(5):
    for j in range(8):
        if num_list[i] == chk_list[j]:
            result_list.append(j+1)

result_list.sort()
for i in range(5):
    print(result_list[i], end=' ')
