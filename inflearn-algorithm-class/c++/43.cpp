#include <iostream>
#include <algorithm>
using namespace std;

int a[1001], n;

int Count(int s)
{
    int cnt = 1, sum = 0;
    for (int i = 0; i < n; i++)
    {
        if (sum + a[i] > s)
        {
            cnt++;
            sum = a[i];
        }
        else
        {
            sum += a[i];
        }
    }
    return cnt;
}

int main()
{
    int m;
    cin >> n >> m;
    int lt = 1, rt = 0, mid, res;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        rt += a[i];
    }

    while (lt <= rt)
    {
        mid = (lt + rt) / 2;
        if (Count(mid) <= m)
        {
            res = mid;
            rt = mid - 1;
        }
        else
        {
            lt = mid + 1;
        }
    }
    cout << res;

    return 0;
}