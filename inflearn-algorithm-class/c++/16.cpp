#include <iostream>
using namespace std;

int main() {
   int alist[52];
   char str[100];
   
   for(int i=0; i<52; i++) {
      alist[i] = 0;
   }
   
   cin >> str;
   for(int i=0; str[i]!='\0'; i++) {
      if(str[i] >=65 && str[i] <= 90) {
         alist[str[i]-65]++;
      }
      else {
         alist[str[i]-71]++;
      }
   }
   cin >> str;
   for(int i=0; str[i]!='\0'; i++) {
      if(str[i] >=65 && str[i] <= 90) {
         alist[str[i]-65]--;
      }
      else {
         alist[str[i]-71]--;
      }
   }
   int chk = 0;
   for(int i=0; i<52; i++) {
      if(alist[i] != 0) {
         chk = 1;
         break;
      }
   }
   if(chk == 1)   cout << "NO";
   else   cout << "YES";
   
   return 0;
}