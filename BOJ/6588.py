import math


def is_prime(x):
    if x == 1:
        return False
    for i in range(2, int(math.sqrt(x)+1)):
        if x % i == 0:
            return False
    return True


prime = [0] * 1000001
for i in range(2, 1000000):
    if is_prime(i):
        prime[i] = 1
print(prime)

while(True):
    n = int(input())
    if n == 0:
        break

    a = 3
    b = n
    while(True):
        if (a+b == n) and prime[a] == 1 and prime[b] == 1:
            print("%d = %d + %d" % (n, prime[a], prime[b]))
            break
        b -= 1
        if a >= b:
            a += 1
            b = n - 1
        if a == n - 1:
            print("Goldbach's conjecture is wrong.")
            break
