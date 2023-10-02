#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int converseWeight(string s) {
    int sum = 0;
    for (int i = 0; i < s.length(); i++) {
        if (i % 2 == 0) {
            sum = sum + (s[i] - 'a');
        }
        else {
            sum = sum - (s[i] - 'a');
        }
    }

    if (sum > 0) {
        return 1;
    } else {
        return 0;
    }
}

int stringPermutation(string s, int start, int end) {
    int range = end - start;
    if (range == 1) {
        return converseWeight(s);
    } else {
        int result = 0;
        for (int i = 0; i < range; i++) {
            swap(s[start], s[start+i]);
            result += stringPermutation(s, start + 1, end);
            swap(s[start], s[start+i]);
        }
        return result;
    }
}

int main() {
    int caseCount;
    cin >> caseCount;

    for (int i = 0; i < caseCount; i++) {
        string word;
        cin >> word;
        int res = stringPermutation(word, 0, word.length());
        cout << res << endl;
    }

    return 0;
}
