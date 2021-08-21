n, l = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

for i in arr:
    if l >= i:
        l += 1
    else:
        break

print(l)
