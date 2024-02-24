def solution(arr, queries):
    result = []
    
    for query in queries:
        tmp = []
        
        for i in range(query[0], query[1] + 1):
            if arr[i] > query[2]:
                tmp.append(arr[i])
                
        if tmp:
            result.append(min(tmp))
        else:
            result.append(-1)
    return result