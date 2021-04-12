#include <iostream>
using namespace std;

int main() {
   int N;
   cin >> N;
   for(int i=0; i<N; i++) {
      int num, sum;
      cin >> num >> sum;
      int originSum =0;
      for(int i=1; i<=num; i++) {
         originSum += i;
      }
      if(originSum == sum)   cout << "YES" << endl;
      else   cout << "NO" << endl;
   }
   
   return 0;
}