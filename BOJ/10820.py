import sys

while True:
    lo, up, di, sp = 0, 0, 0, 0
    s = sys.stdin.readline().rstrip('\n')
    if not s:
        break
    for i in s:
        if i.islower():
            lo += 1
        elif i.isupper():
            up += 1
        elif i.isdigit():
            di += 1
        elif i.isspace():
            sp += 1
    print(lo, up, di, sp)
