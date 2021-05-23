a, b = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()

left = 0
right = a-1

while left <= right:
    middle = (left+right)//2
    if b < arr[middle]:
        right = middle - 1
    elif b > arr[middle]:
        left = middle+1
    else:
        break
print(middle+1)
