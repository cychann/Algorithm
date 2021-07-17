a, b, c = map(int, input().split())

arr = [a, b, c]
arr.sort()

for i in arr:
    print(i, end=' ')
