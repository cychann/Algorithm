#include <iostream>
using namespace std;

int main()
{
    int a, b, c, d, e, time = 0;
    cin >> a >> b >> c >> d >> e;

    int a1 = a;

    while (a != b)
    {
        if (a < 0)
        {
            a++;
            time += c;
        }
        else if (a == 0)
        {
            a++;
            time += d;
        }
        else
        {
            a++;
            time += e;
        }
    }

    if(a1<=0) {
        cout << time+e;
    }
    else {
        cout << time;
    }
}