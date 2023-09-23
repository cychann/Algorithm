import sys
sys.setrecursionlimit(2147483647)

def fastPower(a, n):
    # 행렬을 n번 거듭제곱하는 함수
    if n == 0:
        return 1
    
    if n % 2 == 0:
        temp = fastPower(a, n // 2)
        return (temp * temp) % 1000
    else:
        temp = fastPower(a, (n - 1) // 2)
        return (a * temp * temp) % 1000

case = int(input())
1
for i in range(case):
    a,n = map(int, input().split())
    res = fastPower(a, n)
    print(res)