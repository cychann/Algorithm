#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int tec[4], soc[2];
    for (int i = 0; i < 4; i++)
    {
        cin >> tec[i];
    }
    for (int i = 0; i < 2; i++)
    {
        cin >> soc[i];
    }

    sort(tec, tec + 4);
    sort(soc, soc + 2);

    cout << tec[1] + tec[2] + tec[3] + soc[1];
}