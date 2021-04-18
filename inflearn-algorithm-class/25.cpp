#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int score[n], rank[n];

    for (int i = 0; i < n; i++)
    {
        cin >> score[i];
        rank[i] = 1;
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (score[i] < score[j])
            {
                rank[i]++;
            }
        }
    }

    for (int i = 0; i < n; i++)
    {
        cout << rank[i] << " ";
    }

    return 0;
}