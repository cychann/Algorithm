arr = []
n = int(input())
for i in range(n):
    arr.append(int(input()))

arr.sort()

for i in range(n):
    print(arr[i])
