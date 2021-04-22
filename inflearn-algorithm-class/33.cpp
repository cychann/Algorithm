#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n, tmp;
    cin >> n;
    int a[n];

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    for (int i = 0; i < n; i++)
    {
        int index = i;
        for (int j = i + 1; j < n; j++)
        {
            if (a[j] > a[index])
                index = j;
        }
        tmp = a[i];
        a[i] = a[index];
        a[index] = tmp;
    }

    int cnt = 1, chk = a[0], i = 1;

    while (true)
    {
        if (a[i] < chk)
        {
            cnt++;
            if (cnt == 3)
            {
                chk = a[i];
                break;
            }
        }
        chk = a[i];
        i++;
    }

    cout << chk;

    return 0;
}