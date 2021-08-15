b = input()
b = b.replace("XXXX", "AAAA")
b = b.replace("XX", "BB")

if 'X' in b:
    print(-1)
else:
    print(b)
