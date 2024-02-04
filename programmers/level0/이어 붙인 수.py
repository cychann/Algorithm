def solution(num_list):
    even = ''
    odd = ''
    for num in num_list:
        if num % 2 == 1:
            odd += str(num)
        else:
            even += str(num) 
    return int(odd) + int(even)