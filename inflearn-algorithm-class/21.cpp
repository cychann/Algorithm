#include <iostream>
using namespace std;

int main()
{
    int a[10], b[10];
    int as = 0, bs = 0;
    char lastwinner;

    for (int i = 0; i < 10; i++)
    {
        cin >> a[i];
    }
    for (int i = 0; i < 10; i++)
    {
        cin >> b[i];
    }

    for (int i = 0; i < 10; i++)
    {
        if (a[i] == b[i])
        {
            as++;
            bs++;
        }
        else if (a[i] > b[i])
        {
            as += 3;
            lastwinner = 'a';
        }
        else
        {
            bs += 3;
            lastwinner = 'b';
        }
    }

    cout << as << " " << bs << endl;

    if (as == bs)
    {
        if (lastwinner == 'a')
            cout << "B";
        else if (lastwinner == NULL)
            cout << "D";
        else
            cout << "B";
    }
    else if (as > bs)
        cout << "A";
    else
        cout << "B";

    return 0;
}