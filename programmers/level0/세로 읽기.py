def solution(my_string, m, c):
    answer = ''
    
    for i in range(0, len(my_string), m):
        answer += my_string[i+c-1]
        
    return answer


## 다른 풀이
def solution(s, m, c):
    return s[c-1::m]