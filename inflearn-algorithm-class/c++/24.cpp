#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int jumpNum[n - 1];

    for (int i = 0; i < n - 1; i++)
    {
        jumpNum[i] = 0;
    }

    int prenum, k;
    cin >> k;
    prenum = k;
    for (int i = 1; i < n; i++)
    {
        cin >> k;
        if (abs(prenum - k) > n - 1)
        {
            cout << "NO";
            return 0;
        }

        jumpNum[abs(prenum - k) - 1] = 1;

        prenum = k;
    }

    int chk = 0;
    for (int i = 0; i < n - 1; i++)
    {
        if (jumpNum[i] == 0)
        {
            chk = 1;
            break;
        }
    }

    if (chk == 0)
        cout << "YES";
    else
        cout << "NO";

    return 0;
}