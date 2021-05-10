#include <iostream>
using namespace std;

int main()
{
    int n, b = 1, tmp, cnt = 0, i;
    cin >> n;
    tmp = n;
    n--;
    while (n > 0)
    {
        b++;
        n = n - b;
        if (n % b == 0)
        {
            for (i = 1; i < b; i++)
            {
                cout << (n / b) + i << " + ";
            }
            cout << (n / b) + i << " = " << tmp << endl;
            cnt++;
        }
    }
    cout << cnt;

    return 0;
}