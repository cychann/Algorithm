s = input()
stack = []

for i in range(len(s)):
    stack.append(s)
    s = s[1:]

stack.sort()
for i in stack:
    print(i)
