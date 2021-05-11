num = []

for i in range(1, 21):
    num.append(i)

for _ in range(10):
    a, b = map(int, input().split())
    for i in range((b-a+1)//2):
        num[a+i-1], num[b-i-1] = num[b-i-1], num[a+i-1]

for i in num:
    print(i, end=" ")
