#include <iostream>
using namespace std;

int main()
{
    int day, car[5];
    cin >> day;

    for (int i = 0; i < 5; i++)
    {
        cin >> car[i];
    }

    int cnt = 0;
    for (int i = 0; i < 5; i++)
    {
        if (car[i] == day)
            cnt++;
    }
    cout << cnt;
}