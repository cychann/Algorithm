alpa = input()
num = 0
for i in alpa:
    if i.isdecimal():
        num = num*10 + int(i)
print(num)

cnt = 0
for i in range(1, num+1):
    if(num % i == 0):
        cnt += 1
print(cnt)
