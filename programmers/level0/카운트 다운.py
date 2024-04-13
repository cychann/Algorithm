def solution(start, end_num):
    return [i for i in range(start, end_num-1, -1)]

# 다른 풀이
def solution(start, end):
    return list(range(start,end-1,-1))