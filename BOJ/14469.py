n = int(input())
arr = []
for i in range(n):
    a = list(map(int, input().split()))
    arr.append(a)
arr.sort(key=lambda x: x[0])
time = arr[0][0] + arr[0][1]

for i in range(1, n):
    if time > arr[i][0]:
        time += arr[i][1]
    else:
        time = arr[i][0] + arr[i][1]

print(time)
