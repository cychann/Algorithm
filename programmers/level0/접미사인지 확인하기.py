def solution(my_string, is_suffix):
    chk = []
    for i in range(len(my_string)):
        chk.append(my_string[-i:])
        
    if is_suffix in chk:
        return 1
    else:
        return 0
    
# 다른 풀이
def solution(my_string, is_suffix):
    return int(my_string.endswith(is_suffix))