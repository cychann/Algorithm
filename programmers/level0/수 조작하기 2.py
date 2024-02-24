def solution(numLog):
    result = ""
    n = numLog.pop(0)
    
    for i in numLog:
        if i == n+1:
            result += "w"
        elif i == n-1:
            result += "s"
        elif i == n+10:
            result += "d"
        else:
            result += "a"
        n = i
    return result