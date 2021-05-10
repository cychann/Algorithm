#include <iostream>
using namespace std;

int main()
{
    int N;
    cin >> N;
    int a[N], b[N];

    for (int i = 0; i < N; i++)
    {
        cin >> a[i];
    }

    for (int i = 0; i < N; i++)
    {
        cin >> b[i];
    }

    for (int i = 0; i < N; i++)
    {
        if (a[i] == 1)
        {
            if (b[i] == 1)
                cout << "D" << endl;
            else if (b[i] == 2)
                cout << "B" << endl;
            else
                cout << "A" << endl;
        }
        else if (a[i] == 2)
        {
            if (b[i] == 2)
                cout << "D" << endl;
            else if (b[i] == 1)
                cout << "A" << endl;
            else
                cout << "B" << endl;
        }
        else
        {
            if (b[i] == 3)
                cout << "D" << endl;
            else if (b[i] == 1)
                cout << "B" << endl;
            else
                cout << "A" << endl;
        }
    }

    return 0;
}