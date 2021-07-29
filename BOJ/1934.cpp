#include <iostream>
using namespace std;

int gcd(int a, int b)
{
    while (b > 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int lcm(int a, int b)
{
    return (a * b) / gcd(a, b);
}

int main()
{
    int t;
    cin >> t;

    for (int i = 0; i < t; i++)
    {
        int n, m, lc;
        cin >> n >> m;
        lc = lcm(n, m);
        cout << lc << endl;
    }

    return 0;
}