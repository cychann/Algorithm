#include <iostream>
using namespace std;

int main()
{
    int n, tmp, pos;
    cin >> n;
    int a[n + 1];
    int cnt[n + 1];

    for (int i = 1; i <= n; i++)
    {
        cin >> cnt[i];
    }

    for (int i = n; i > 0; i--)
    {
        pos = i;
        for (int j = 0; j < cnt[i]; j++)
        {
            a[pos] = a[pos + 1];
            pos++;
        }
        a[pos] = i;
    }

    for (int i = 1; i <= n; i++)
    {
        cout << a[i] << " ";
    }

    return 0;
}