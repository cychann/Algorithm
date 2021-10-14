s = list(input())
c1, c2, c3, c4 = 0, 0, 0, 0
c1c, c2c, c3c, c4c = 0, 0, 0, 0

for i in range(len(s)):
    if s[i] == 'U' and c1 == 0:
        c1 = i
        c1c = 1
    elif s[i] == 'C':
        if c2 == 0 and c4 == 0:
            if i > c1 and c1c == 1:
                c2 = i
                c2c = 1
        elif c2 != 0 and c4 == 0:
            if i > c3 and c3c == 1:
                c4 = i
                c4c = 1
    elif s[i] == 'P' and c3 == 0:
        if i > c2 and c2c == 1:
            c3 = i
            c3c = 1

if c1c == 1 and c2c == 1 and c3c == 1 and c4c == 1:
    print("I love UCPC")
else:
    print("I hate UCPC")
