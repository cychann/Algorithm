def solution(start_num, end_num):
    answer = []
    for i in range(start_num, end_num + 1):
        answer.append(i)
    return answer

#other solution
def solution(start_num, end_num):
    return list(range(start_num, end_num+1))