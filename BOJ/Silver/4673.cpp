#include <iostream>
using namespace std;

int solution(int n)
{
    int sum = n;

    while (1)
    {
        if (n == 0)
            break;
        sum += n % 10;
        n = n / 10;
    }

    return sum;
}

bool self[10001];

int main()
{
    for (int i = 0; i < 10000; i++)
    {
        int x = solution(i);
        if (x <= 10001)
        {
            self[x] = true;
        }
    }

    for (int i = 1; i <= 10000; i++)
    {
        if (!self[i])
        {
            cout << i << endl;
        }
    }
}