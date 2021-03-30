#include <iostream>
using namespace std;

int main()
{
    int N, F;
    cin >> N >> F;

    int mod = N % 100;
    N = N - mod;

    int mod2 = N%F;

    int result;
    
    if(mod2 == 0)   result = N;
    else {
        for(int i=0; i<F-mod2; i++) {
            N++;
        }
        result = N;
    }

    if(result%100 < 10) {
        cout << '0' << result%100;
    }
    else {
cout << result%100;
    }
    
}