import sys
sys.setrecursionlimit(1000000)

def reverseString(arr,i,j):
    if i>= j:
        print(''.join(arr))
        return
    
    (arr[i], arr[j]) = (arr[j], arr[i])
    reverseString(arr, i+1, j-1)


n = int(sys.stdin.readline())
for i in range(n):
    s = sys.stdin.readline().strip()
    reverseString(list(s), 0, len(s)-1)
