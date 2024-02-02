def solution(a, b):
    a_plus_b = int(str(a) + str(b))
    b_plus_a = int(str(b) + str(a))
    
    return a_plus_b if a_plus_b >= b_plus_a else b_plus_a

#

def solution(a, b):
    return int(max(f"{a}{b}", f"{b}{a}"))