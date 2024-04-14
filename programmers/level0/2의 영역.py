def solution(arr):
    if 2 not in arr:
        return [-1]
    
    return arr[arr.index(2):len(arr)-arr[::-1].index(2)]