def solution(numbers, n):
    result = 0
    for number in numbers:
        result += number
        
        if result > n:
            return result