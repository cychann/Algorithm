t = int(input())

a = t // 300
b = (t % 300) // 60
c = ((t % 300) % 60) // 10

if t % 10 == 0:
    print(a, b, c)
else:
    print(-1)
