def solution(my_string):
    answer = [0 for _ in range(52)]
    for string in my_string:
        if string.isupper():
            answer[ord(string) - 65] += 1
        else:
            answer[ord(string) - 97 + 26] += 1 
    
    return answer