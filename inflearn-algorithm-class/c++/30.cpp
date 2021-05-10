#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int lt = 1, cur, rt, res = 0, k = 1;
    while (lt != 0)
    {
        lt = n / (k * 10);
        cur = (n / k) % 10;
        rt = n % k;
        if (cur > 3)
        {
            res = res + ((lt + 1) * k);
        }
        else if (cur < 3)
        {
            res = res + (lt * k);
        }
        else
        {
            res = res + (lt * k) + (rt + 1);
        }

        k *= 10;
    }

    cout << res;
    return 0;
}