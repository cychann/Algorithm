#include <stdio.h>
#include <math.h>

void hanoi_tower(
    int n, int a, int b, int c,
    long long unsigned target
);

int main() {
    int t;
    scanf("%d", &t);

    for(int i = 0; i < t; i++) {
        int n;
        long long unsigned target;

        scanf("%d %llu", &n, &target);

        hanoi_tower(n, 1, 2, 3, target);
    }

    return 0;
}

void hanoi_tower(
    int n, int a, int b, int c,
    long long unsigned target
) {
    if (n <= 1) {
        printf("%d %d\n", a, c);
        return;
    }
    long long unsigned T = (pow(2, n - 1));
    
    if (T >= target)
        hanoi_tower(n - 1, a, c, b, target);
    else
        hanoi_tower(n - 1, b, a, c, target - T);
}