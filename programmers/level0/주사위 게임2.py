def solution(a, b, c):
    answer = 0
    if (a == b and b == c):
        return (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c)
    elif (a == b or b == c or a == c):
        return (a + b + c) * (a*a + b*b + c*c)
    else:
        return a + b + c
