N, K, A, B = map(int, input().split())
day = 0
m = [K] * N

while(True):
    m.sort()
    if (m[0] <= 0):
        break
    day += 1
    for i in range(A):
        m[i] += B
    for i in range(N):
        m[i] -= 1
print(day)
