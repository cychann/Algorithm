#include <iostream>
using namespace std;

int rev(int n)
{
    int r = 0;

    while (n != 0)
    {
        r *= 10;
        r += n % 10;
        n /= 10;
    }

    return r;
}

int main()
{
    int n, m;
    cin >> n >> m;

    cout << rev(rev(n) + rev(m));
}