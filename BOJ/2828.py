n, m = map(int, input().split())
j = int(input())
left = 1
right = left + m - 1
l = 0
for i in range(j):
    drop = int(input())

    if drop > right:
        l += drop - right
        left += drop - right
        right += drop - right
    elif drop < left:
        l += left - drop
        right -= left - drop
        left -= left - drop

print(l)
