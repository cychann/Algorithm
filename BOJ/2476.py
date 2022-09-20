n = int(input())
sum = 0

for _ in range(n):
    a, b, c = map(int, input().split())
    
    if a == b == c:
        sum = max(sum, 10000+a*1000)
    elif a == b:
        sum = max(sum, 1000+a*100)
    elif a == c:
        sum = max(sum, 1000+a*100)
    elif b == c:
        sum = max(sum, 1000+b*100)
    else:
        sum = max(sum, 100 * max(a,b,c))

print(sum)