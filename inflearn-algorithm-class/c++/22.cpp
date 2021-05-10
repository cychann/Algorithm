#include <iostream>
using namespace std;

int main()
{
    int n, k, maxsum = 0;
    cin >> n >> k;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int sum = 0;

    //   아래 코드로 실행하면 실행시간이 너무 오래 걸린다
    //   for(int i=0; i<n; i++) {
    //      for(int j=0; j<k; j++) {
    //         sum += arr[i+j];
    //      }
    //      cout << sum << endl;
    //      if(sum > maxsum)   maxsum = sum;
    //   }

    for (int i = 0; i < k; i++)
    {
        sum += arr[i];
    }
    maxsum = sum;

    for (int i = k; i < n; i++)
    {
        sum = sum + (arr[i] - arr[i - k]);
        if (sum > maxsum)
            maxsum = sum;
    }

    cout << maxsum;

    return 0;
}