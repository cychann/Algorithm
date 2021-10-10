import sys

while True:
    line = sys.stdin.readline().strip()
    if not line:
        break
    s, t = line.split()
    idx = 0
    chk = 0

    for i in range(len(t)):
        if t[i] == s[idx]:
            idx += 1
            if idx == len(s):
                chk = 1
                break

    if chk == 0:
        print("No")
    else:
        print("Yes")
