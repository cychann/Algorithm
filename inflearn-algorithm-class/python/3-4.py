a = int(input())
num1 = list(map(int, input().split()))
b = int(input())
num2 = list(map(int, input().split()))

num = []

p1 = p2 = 0

for i in range(a+b):
    if(num1[p1] > num2[p2]):
        num.append(num2[p2])
        p2 += 1
    else:
        num.append(num1[p1])
        p1 += 1

    if(p1 >= a or p2 >= b):
        break

if p1 < a:
    num = num + num1[p1:]
else:
    num = num + num2[p2:]

for i in num:
    print(i, end=' ')
