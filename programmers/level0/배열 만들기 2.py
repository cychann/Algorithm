def check_num(num):
    result = True
    while num > 0:
        chk = num % 10
        if chk != 0 and chk != 5:
            return False
        num //= 10
    return True

def solution(l, r):
    answer = []
    
    for i in range(l, r+1):
        if check_num(i):
            answer.append(i)
    
    if answer:
        return answer
    else:
        return [-1]

#ohter solution
def solution(l, r):
    answer = []
    for num in range(l, r + 1):
        if not set(str(num)) - set(['0', '5']):
            answer.append(num)
    return answer if answer else [-1]