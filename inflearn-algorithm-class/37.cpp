#include <iostream>
using namespace std;

int main()
{
    int s, n;
    cin >> s >> n;
    int a[s];

    for (int i = 0; i < s; i++)
    {
        a[i] = 0;
    }

    int in;
    for (int i = 0; i < n; i++)
    {
        cin >> in;
        int pos = -1;
        for (int j = 0; j < s; j++)
        {
            if (a[j] == in)
                pos = j;
        }

        if (pos == -1)
        {
            for (int j = s - 1; j > 0; j--)
            {
                a[j] = a[j - 1];
            }
            a[0] = in;
        }
        else
        {
            for (int j = pos; j > 0; j--)
            {
                a[j] = a[j - 1];
            }
            a[0] = in;
        }
    }

    for (int i = 0; i < s; i++)
    {
        cout << a[i] << " ";
    }

    return 0;
}