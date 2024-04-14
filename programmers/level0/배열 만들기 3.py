def solution(arr, intervals):
    answer = []
    for interval in intervals:
        start,end = interval
        
        answer += arr[start:end+1]
        
    return answer