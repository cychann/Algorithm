def solution(number):
    number_sum = 0
    for i in number:
        number_sum += int(i)
    
    return number_sum % 9