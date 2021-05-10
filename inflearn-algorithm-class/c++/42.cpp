#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n, num;
    cin >> n >> num;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    sort(arr, arr + n);

    int left = 0, right = n - 1, middle;

    while (left <= right)
    {
        middle = (left + right) / 2;
        if (num < arr[middle])
        {
            right = middle - 1;
        }
        else if (num > arr[middle])
        {
            left = middle + 1;
        }
        else
            break;
    }

    cout << middle + 1;

    return 0;
}