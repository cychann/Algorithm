#include <iostream>
using namespace std;

int main() {
    int N,cnt=0;
    cin >> N;
    int hlist[N];
    for(int i=0; i<N; i++) {
       cin >> hlist[i];
    }
    
    
    for(int i=0; i<N-1; i++) {
       int chk = 0;
       for(int j=i+1; j<N; j++) {   
          if(hlist[i] <= hlist[j]) {
             chk = 1;
             break;
          }
       }
       if(chk == 0)   cnt += 1;
    }
    
    cout << cnt;
    return 0;
}