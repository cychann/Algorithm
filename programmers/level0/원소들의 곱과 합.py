def solution(num_list):
    multi = 1
    for num in num_list:
        multi *= num
    return 1 if multi < sum(num_list)**2 else 0