arr = list(map(int, input().split()))
arr.sort()
a = arr[0] + arr[1]

while(a <= arr[2]):
    arr[2] -= 1

print(a + arr[2])
