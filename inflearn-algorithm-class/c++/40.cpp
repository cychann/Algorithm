#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n, m;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    sort(a, a + n);
    cin >> m;
    int b[m];
    for (int i = 0; i < m; i++)
    {
        cin >> b[i];
    }
    sort(b, b + m);

    int c[n + m];
    int apos = 0, bpos = 0, cpos = 0;

    for (int i = 0; i < m + n; i++)
    {
        if (a[apos] == b[bpos])
        {
            c[cpos] = a[apos];
            apos++;
            bpos++;
            cpos++;
        }
        else if (a[apos] < b[bpos])
            apos++;
        else
            bpos++;
        if (apos == n || bpos == m)
            break;
    }

    sort(c, c + cpos);
    for (int i = 0; i < cpos; i++)
    {
        cout << c[i] << " ";
    }

    return 0;
}