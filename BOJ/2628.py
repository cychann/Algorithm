x, y = map(int, input().split())

n = int(input())

x_list = [0, x]
y_list = [0, y]

for i in range(n):
    a, b = map(int, input().split())

    if a == 1:
        x_list.append(b)
    else:
        y_list.append(b)

x_list.sort()
y_list.sort()

x_list_len = []
y_list_len = []

result_x = 0
result_y = 0

for i in range(1, len(x_list)):
    result_x = max(result_x, x_list[i] - x_list[i-1])

for i in range(1, len(y_list)):
    result_y = max(result_y, y_list[i] - y_list[i-1])

print(result_x * result_y)
