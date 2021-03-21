#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int skill[4];
    for(int i=0; i<4; i++) {
        cin >> skill[i];
    }

    sort(skill, skill+4);

    cout << (skill[0]+skill[3]) - (skill[1]+skill[2]);
}