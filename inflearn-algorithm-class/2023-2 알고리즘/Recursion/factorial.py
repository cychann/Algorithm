import sys
sys.setrecursionlimit(1000000) #1000000번 재귀가 가능하도록

def factorial(n):
    if n <= 1:
        return 1

    return n * factorial(n-1)

def last_three_digits_without_trailing_zeros(number):
    reversed_number_str = str(number)[::-1]
    
    non_zero_digits = []
    
    for digit in reversed_number_str:
        if digit != '0':
            non_zero_digits.append(digit)
    
    result_str = ''.join(non_zero_digits[::-1])
    
    result = result_str[-3:]
    
    print(result)


case = int(sys.stdin.readline())
for i in range(case):
    n = int(sys.stdin.readline())
    res = factorial(n)
    last_three_digits_without_trailing_zeros(res)