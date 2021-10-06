import sys

n = int(sys.stdin.readline())
arr = []
res = 0
for i in range(1, n+1):
    arr.append(int(sys.stdin.readline()))
arr.sort()

for i in range(n):
    res += abs(arr[i] - (i+1))

print(res)
