#include <iostream>
using namespace std;

int main() {
   int n,m;
   cin >> n;
   int a[n];
   for(int i=0; i<n; i++) {
      cin >> a[i];
   }
   cin >> m;
   int b[m];
   for(int i=0; i<m; i++) {
      cin >> b[i];
   }
   int c[n+m];
   
   int apos=0, bpos=0, cpos=0;
   
   for(int i=0; i<n+m; i++) {
      if(a[apos] > b[bpos]) {
         c[cpos] = b[bpos];
         cpos++;
         bpos++;
      }
      else {
         c[cpos] = a[apos];
         cpos++;
         apos++;
      }
      if(apos == n || bpos == m)   break;
   }
   
   while(apos<n) {
      c[cpos] = a[apos];
      cpos++;
      apos++;
   }
   while(bpos<m) {
      c[cpos] = b[bpos];
      cpos++;
      bpos++;
   }
   
   for(int i=0; i<n+m; i++){
      cout << c[i] << " ";
   }
   
   return 0;
}