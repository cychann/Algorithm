#include <iostream>
using namespace std;

int main()
{
    int testCase;
    cin >> testCase;

    for (int i = 0; i < testCase; i++)
    {
        int N, M;
        cin >> N >> M;

        int top = 1, bottom = 1;
        for (int i = M; i > M - N; i--)
        {
            top *= i;
        }

        for (int i = N; i > 0; i--)
        {
            bottom *= i;
        }
        cout << top / bottom << endl;
    }
}

// MCN = (M * M-1 * M-2 * ... * M-N+1) / (N * N-1 * ... * 1)