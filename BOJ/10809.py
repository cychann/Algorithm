c = input()

alpa = [-1] * 26
for i in range(len(c)):
    if alpa[ord(c[i]) - 97] == -1:
        alpa[ord(c[i]) - 97] = i


for i in alpa:
    print(i, end=' ')
