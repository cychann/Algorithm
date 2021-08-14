n = int(input())

a = n//5
b = n % 5

if b == 0:
    print(a)
elif b == 1 and n > 1:
    print(a+1)
elif b == 2 and n > 7:
    print(a+2)
elif b == 3:
    print(a+1)
elif b == 4 and n > 4:
    print(a+2)
else:
    print(-1)
