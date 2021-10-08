i = 0
while(True):
    i += 1
    l, p, v = map(int, input().split())
    if l == 0 and p == 0 and v == 0:
        break
    a = v//p
    b = min(v % p, l)
    print("Case {}: {}".format(i, l*a + b))
