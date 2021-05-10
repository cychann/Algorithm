#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int chk[n + 1];

    for (int i = 0; i <= n; i++)
    {
        chk[i] = 0;
    }

    int tmp, j;
    for (int i = 2; i <= n; i++)
    {
        tmp = i;
        j = 2;
        while (true)
        {
            if (tmp % j == 0)
            {
                tmp = tmp / j;
                chk[j]++;
            }
            else
                j++;
            if (tmp == 1)
                break;
        }
    }

    cout << n << "! = ";
    for (int i = 2; i <= n; i++)
    {
        if (chk[i] != 0)
            cout << chk[i] << " ";
    }

    return 0;
}