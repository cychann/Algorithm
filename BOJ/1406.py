import sys

left_arr = list(sys.stdin.readline().rstrip())
right_arr = []
n = int(input())
for i in range(n):
    c = sys.stdin.readline().split()
    if c[0] == 'L':
        if left_arr:
            right_arr.append(left_arr.pop())
    elif c[0] == 'D':
        if right_arr:
            left_arr.append(right_arr.pop())
    elif c[0] == 'B':
        if left_arr:
            left_arr.pop()
    else:
        left_arr.append(c[1])

right_arr.reverse()
ans = left_arr + right_arr

for i in ans:
    print(i, end='')
