import sys
sys.setrecursionlimit(1000000) #1000000번 재귀가 가능하도록

def fibonacci(n):
    if n == 0:
        return 0

    if n == 1:
        return 1
    
    return fibonacci(n-1) + fibonacci(n-2)

case = int(sys.stdin.readline())

for i in range(case):
    n = int(sys.stdin.readline())
    res = fibonacci(n)
    print(res)