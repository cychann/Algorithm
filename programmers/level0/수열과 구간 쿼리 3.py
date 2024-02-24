def swap(arr, a,b):
    tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp

def solution(arr, queries):
    for query in queries:
        swap(arr,query[0], query[1])

        
    return arr

# other 
def solution(arr, queries):
    for a,b in queries:
        arr[a],arr[b]=arr[b],arr[a]
    return arr