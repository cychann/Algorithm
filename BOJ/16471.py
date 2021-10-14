n = int(input())
arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))
s = (n+1)//2 - 1
arr1.sort()
arr2.sort()
arr2 = arr2[s:]

w1, w2 = 0, 0
for i in range(len(arr2)):
    if arr1[i] < arr2[i]:
        w1 += 1
    elif arr1[i] > arr2[i]:
        w2 += 1

if w1 > w2 and w1 >= s+1:
    print("YES")
else:
    print("NO")
