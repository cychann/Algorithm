#include <iostream>
using namespace std;

int main() {
    int n,m,cnt=0,maxcnt=0;
    cin >> n >> m;
    for(int i=0; i<n; i++) {
       int r;
       cin >> r;
       if(r>m) {
          cnt += 1;
      }
       else {
          cnt = 0;
       }
       if(cnt > maxcnt)   maxcnt = cnt;
    }
    if(maxcnt == 0) {
       cout << -1;
    }
    else {
       cout << maxcnt;
    }
    
    return 0;
}