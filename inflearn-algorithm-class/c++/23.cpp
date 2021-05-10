#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int num, prenum = 0, cnt = 0, maxcnt;
    for (int i = 0; i < n; i++)
    {
        cin >> num;
        if (num >= prenum)
        {
            cnt++;
        }
        else
        {
            if (cnt > maxcnt)
                maxcnt = cnt;
            cnt = 0;
            cnt++;
        }

        if (cnt > maxcnt)
            maxcnt = cnt; //예외처리
        prenum = num;
    }

    cout << maxcnt;
    return 0;
}