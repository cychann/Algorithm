#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int cnt = 0;
    int tmp;
    for (int i = 1; i <= n; i++)
    {
        tmp = i;
        while (tmp > 0)
        {
            if (tmp % 10 == 3)
                cnt++;
            tmp = tmp / 10;
        }
    }
    cout << cnt;

    return 0;
}