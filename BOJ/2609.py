a, b = map(int, input().split())


def gcd(n1, n2):
    while(n2 > 0):
        t = n2
        n2 = n1 % n2
        n1 = t
    return n1


print(gcd(a, b))
print((a*b) // gcd(a, b))
