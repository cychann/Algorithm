def solution(code):
    answer = ''
    mode = 0
    for idx in range(len(code)):
        if code[idx] == '1':
            mode = 1 if mode == 0 else 0
        else:
            if (mode == 0 and idx % 2 == 0):
                answer += code[idx]
            if (mode == 1 and idx % 2 == 1):
                answer += code[idx]
    return answer if answer else "EMPTY"