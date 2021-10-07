n = int(input())
k = int(input())
arr = list(map(int, input().split()))
arr.sort()
l = []

for i in range(1, n):
    l.append(arr[i] - arr[i-1])
l.sort()
for i in range(k-1):
    if len(l) == 0:
        l.append(0)
        break
    else:
        l.pop()
res = 0
print(sum(l))
