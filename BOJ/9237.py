n = int(input())
t = list(map(int, input().split()))
t.sort(reverse=True)
for i in range(n):
    t[i] += i+1
t.sort(reverse=True)
print(t[0] + 1)
