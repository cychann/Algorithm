def solution(intStrs, k, s, l):
    answer = []
    
    for intStr in intStrs:
        print(intStr[s:s+l])
        if k < int(intStr[s:s+l]):
            answer.append(int(intStr[s:s+l]))
            
    return answer