n = int(input())
num_list = []

for _ in range(n):
    num_list.append(int(input()))

num_list.sort()

for i in range(n):
    print(num_list[i])
