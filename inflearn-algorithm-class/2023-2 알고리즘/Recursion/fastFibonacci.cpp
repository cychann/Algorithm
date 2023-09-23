#include <iostream>
#include <vector>

std::vector<std::vector<long long>> matrix_multiply(const std::vector<std::vector<long long>>& A, const std::vector<std::vector<long long>>& B) {
    int rows_A = A.size();
    int cols_A = A[0].size();
    int cols_B = B[0].size();
    
    std::vector<std::vector<long long>> result(rows_A, std::vector<long long>(cols_B, 0));
    
    for (int i = 0; i < rows_A; i++) {
        for (int j = 0; j < cols_B; j++) {
            for (int k = 0; k < cols_A; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    return result;
}

std::vector<std::vector<long long>> matrix_power(const std::vector<std::vector<long long>>& matrix, int n) {
    if (n == 1) {
        return matrix;
    }
    
    int rows = matrix.size();
    int cols = matrix[0].size();
    
    std::vector<std::vector<long long>> half_pow = matrix_power(matrix, n / 2);
    
    if (n % 2 == 0) {
        return matrix_multiply(half_pow, half_pow);
    } else {
        std::vector<std::vector<long long>> temp = matrix_multiply(half_pow, half_pow);
        return matrix_multiply(temp, matrix);
    }
}

long long fibonacci(int n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    
    // 초기 행렬 설정
    std::vector<std::vector<long long>> F = {{1, 1}, {1, 0}};
    
    // F 행렬을 지수 연산하여 결과 계산
    std::vector<std::vector<long long>> result_matrix = matrix_power(F, n - 1);
    
    // 결과 행렬의 첫 번째 원소가 F(n)이 됩니다.
    return result_matrix[0][0];
}

int main() {
    int caseCount;
    std::cin >> caseCount;

    for (int i = 0; i < caseCount; i++) {
        int n;
        std::cin >> n;
        long long res = fibonacci(n);
        std::cout << res << std::endl;
    }

    return 0;
}
