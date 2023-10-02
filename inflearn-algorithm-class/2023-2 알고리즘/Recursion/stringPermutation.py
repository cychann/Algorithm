import sys

def converseWeight(s):
    sum = 0
    for i in range(len(s)):
        sum += (ord(s[i]) - ord('a')) * (-1)**i
    
    if sum > 0:
        return 1
    else:
        return 0

def stringPermutation(s, start, end):
    if start == end:
        return converseWeight("".join(s))
    else:
        result = 0
        for i in range(start, end + 1):
            s[start], s[i] = s[i], s[start]
            result += stringPermutation(s, start+1, end)
        return result
    


case = int(sys.stdin.readline())
for _ in range(case):
    word = input()
    s = list(word)
    res = stringPermutation(s, 0 ,len(s) -1)
    print(res)
