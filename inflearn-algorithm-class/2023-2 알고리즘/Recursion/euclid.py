import sys
sys.setrecursionlimit(1000000)

def gcd(a,b):
    if b == 0:
        return a
    
    return gcd(b, a%b)

case = int(sys.stdin.readline())
for i in range(case):
    a,b  = map(int, sys.stdin.readline().split())
    res = gcd(a,b)
    print(res)