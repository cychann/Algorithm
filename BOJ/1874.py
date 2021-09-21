n = int(input())
stack = []
ans = []
chk = 1
j = 0
for i in range(n):
    num = int(input())
    while chk <= num:
        stack.append(chk)
        ans.append("+")
        chk += 1
    if stack[-1] == num:
        stack.pop()
        ans.append("-")
    else:
        print("NO")
        j = 1
        break
if j == 0:
    for i in ans:
        print(i)
