c = input()

alpa = [0] * 26
for i in c:
    alpa[ord(i) - 97] += 1

for i in alpa:
    print(i, end=' ')
