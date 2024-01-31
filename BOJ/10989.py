import sys

count_map = {}
n = int(sys.stdin.readline())

for _ in range(n):
    num = int(sys.stdin.readline())
    if num in count_map:
        count_map[num] += 1
    else:
        count_map[num] = 1

sorted_data = []
for key, count in sorted(count_map.items()):
    sorted_data += [key] * count

for num in sorted_data:
    print(num)


# import sys

# n = int(sys.stdin.readline())
# n_list = [0] * 10001
# for _ in range(n):
#     n_input = int(sys.stdin.readline())
#     n_list[n_input] += 1

# for i in range(10001):
#     if n_list[i] != 0:
#         for j in range(n_list[i]):
#             print(i)    

# import sys

# n = int(sys.stdin.readline())
# n_list = []
# for _ in range(n):
#     n_list.append(int(sys.stdin.readline()))

# n_list.sort()

# for i in n_list:
#     print(i)
            
# append -> for문의 반복마다 메모리 재할당이 일어나 메모리를 효율적으로 사용하지 못하게 됨
#  범위가 명확해야만 함
# 입력은 시간복잡도로 안침


# 범위가 정해져있지 않을 때는 어떻게 해야할까. -> 다음주 월요일까지 숙제임.