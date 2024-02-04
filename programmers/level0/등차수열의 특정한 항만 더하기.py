def solution(a, d, included):
    answer = 0
    for idx in range(len(included)):
        if included[idx]:
            answer += a + d*idx
    return answer

#
def solution(a, d, included):
    answer = 0
    for i in range(len(included)):
        answer += (a + d * i) * int(included[i])
    return answer