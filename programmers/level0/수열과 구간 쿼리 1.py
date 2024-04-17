def solution(arr, queries):
    for query in queries:
        s,e = query
        for i in range(s,e+1):
            arr[i] += 1
            
    return arr