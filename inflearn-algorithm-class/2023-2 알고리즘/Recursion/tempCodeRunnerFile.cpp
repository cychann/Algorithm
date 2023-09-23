#include <iostream>
#include <vector>

std::vector<long long> memo;

long long fibonacci(int n) {
    if (n < 0) {
        return 0;
    }

    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    if (n < memo.size() && memo[n] != -1) {
        return memo[n];
    }

    long long result = (fibonacci(n - 1) + fibonacci(n - 2)) % 1000;

    if (n < memo.size()) {
        memo[n] = result;
    } else {
        memo.push_back(result);
    }

    return result;
}

int main() {
    int caseCount;
    std::cin >> caseCount;

    memo.assign(10001, -1);  // 메모이제이션 배열 초기화

    for (int i = 0; i < caseCount; i++) {
        int n;
        std::cin >> n;
        long long res = fibonacci(n);
        std::cout << res << std::endl;
    }

    return 0;
}
