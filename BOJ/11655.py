s = input()
res = ""
for i in s:
    if i.isalpha():
        if i.islower():
            n = ord(i) + 13
            if n > 122:
                n -= 26
            res += chr(n)
        elif i.isupper():
            n = ord(i) + 13
            if n > 90:
                n -= 26
            res += chr(n)
    else:
        res += i

print(res)
