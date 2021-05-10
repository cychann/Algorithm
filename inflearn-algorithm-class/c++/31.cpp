#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    char a[10];
    cin >> a;

    int c = 0, h = 0, pos, i;

    if (a[1] == 'H')
    {
        c = 1;
        pos = 1;
    }
    else
    {
        for (i = 1; a[i] != 'H'; i++)
        {
            c = c * 10 + (a[i] - 48);
        }
        pos = i;
    }
    if (a[pos + 1] == '\0')
        h = 1;
    else
    {
        for (i = pos + 1; a[i] != '\0'; i++)
        {
            h = h * 10 + (a[i] - 48);
        }
    }

    cout << c * 12 + h;
    return 0;
}