#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n][2];
    int as[n];

    for(int i=0; i<n; i++) {
        as[i] = 1;
        cin >> arr[i][0] >> arr[i][1];
    }

    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1])  as[i]++;
        }
    }

    for(int i=0; i<n; i++) {
        cout << as[i] << " ";
    }
    return 0;
}