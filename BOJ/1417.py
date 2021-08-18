n = int(input())
arr = []
arr1 = int(input())

if n == 1:
    print(0)
else:
    for i in range(n-1):
        arr.append(int(input()))

    arr.sort(reverse=True)
    res = 0
    while(arr1 <= arr[0]):
        arr1 += 1
        arr[0] -= 1
        res += 1
        arr.sort(reverse=True)

    print(res)
