T = int(input())

for _ in range(T):
    num_list = list(map(int, input().split()))
    num_list.sort(reverse=True)
    print(num_list[2])
