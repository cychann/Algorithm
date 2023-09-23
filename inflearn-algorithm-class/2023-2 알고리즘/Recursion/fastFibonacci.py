import sys
sys.setrecursionlimit(2147483647)

def matrixMultiply(A, B):
    # 두 행렬 A와 B를 곱하는 함수
    result = [[0 for _ in range(0,2)] for _ in range(0,2)]
    
    for i in range(2):
        for j in range(2):
            for k in range(2):
                # 끝 3자리만 고려하므로 연산 줄이기
                result[i][j] += (A[i][k] * B[k][j]) % 1000
    
    return result

def matrixPower(matrix, n):
    # 행렬을 n번 거듭제곱하는 함수
    if n == 1:
        return matrix
    
    if n % 2 == 0:
        temp = matrixPower(matrix, n // 2)
        return matrixMultiply(temp, temp)
    else:
        temp = matrixPower(matrix, (n - 1) // 2)
        return matrixMultiply(matrixMultiply(temp, temp), matrix)

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    
    F = [[1, 1], [1, 0]]
    
    result_matrix = matrixPower(F, n - 1)
    
    # 마지막 3자리만 고려
    return str(result_matrix[0][0] % 1000)


case = int(input())

for i in range(case):
    n = int(input())
    res = fibonacci(n)
    print(res)