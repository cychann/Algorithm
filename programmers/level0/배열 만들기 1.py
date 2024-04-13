def solution(n, k):
    tmp = n // k
    answer = []
    
    for i in range(1, tmp+1):
        answer.append(k*i)
        
    return answer;
    