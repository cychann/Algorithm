#include <iostream>
#include <vector>
using namespace std;

vector<int> bubbleSort1(vector<int> arr) {
    vector<int> result(2, 0); 
    int size = arr[0];
    arr.erase(arr.begin());

    for (int i = 1; i < size; i++) {
        for (int j = 1; j < size - i + 1; j++) {
            result[0]++; 
            if (arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
                result[1]++; 
            }
        }
    }

    return result;
}

vector<int> bubbleSort2(vector<int> arr) {
    vector<int> result(2, 0); 
    int size = arr[0];
    arr.erase(arr.begin());

    for (int i = 1; i < size; i++) {
        bool swapped = false;
        for (int j = 1; j < size - i + 1; j++) {
            result[0]++; 
            if (arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
                swapped = true;
                result[1]++; 
            }
        }
        if (!swapped) {
            break;
        }
    }

    return result;
}

vector<int> bubbleSort3(vector<int> arr) {
    vector<int> result(2, 0); 
    int size = arr[0];
    arr.erase(arr.begin());
    int lastSwappedIndex = size;

    while (lastSwappedIndex > 0) {
        int swappedIndex = 0;
        for (int j = 1; j < lastSwappedIndex; j++) {
            result[0]++; 
            if (arr[j - 1] > arr[j]) {
                swap(arr[j - 1], arr[j]);
                swappedIndex = j;
                result[1]++; 
            }
        }
        lastSwappedIndex = swappedIndex;
    }

    return result;
}

int main() {
    int n;
    cin >> n;

    for (int i = 0; i < n; i++) {
        int size;
        cin >> size;
        vector<int> num_list(size + 1);
        num_list[0] = size;

        for (int j = 1; j <= size; j++) {
            cin >> num_list[j];
        }

        vector<int> ans1 = bubbleSort1(num_list);
        vector<int> ans2 = bubbleSort2(num_list);
        vector<int> ans3 = bubbleSort3(num_list);

        cout << ans1[0] << " " << ans1[1] << " " << ans2[0] << " " << ans2[1] << " " << ans3[0] << " " << ans3[1] << endl;
    }

    return 0;
}
