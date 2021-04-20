#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int tmp, j, chk1, chk2;
    for (int i = 2; i <= n; i++)
    {
        tmp = i;
        j = 2;
        while (true)
        {
            if (tmp % j == 0)
            {
                if (j == 2)
                    chk1++;
                else if (j == 5)
                    chk2++;
                tmp = tmp / j;
            }
            else
                j++;
            if (tmp == 1)
                break;
        }
    }

    if (chk1 > chk2)
        cout << chk2;
    else
        cout << chk1;

    return 0;
}