n = int(input())

for i in range(n):
    alpa = input()
    alpa = alpa.upper()
    alpaLen = len(alpa)
    chk = 0
    for j in range(alpaLen):
        if(alpa[j] != alpa[alpaLen-j-1]):
            chk = 1
            break

    if(chk == 0):
        print('#%i YES' % (i+1))
    else:
        print('#%i NO' % (i+1))
