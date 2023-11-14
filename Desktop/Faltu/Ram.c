#include <stdio.h>
// #include <stdio.h>
// //take something but return nothing
// int add (int a, int b); //decleration of the function
// int subt(int a , int b);

// int main () {
// int a , b;
// printf("Enter a number : ");
// scanf("%d",&a);

// printf("Enter a second numbr : ");
// scanf("%d",&b);

// printf("the sum is %d\n",add(a,b));
// printf("the subt is %d\n",subt(a,b));
//   return 0;
// }

// //definition part
// int add ( int x, int y) {
//   return x + y;
// }

// int subt ( int x, int y) {
//   return x - y;
// }
  
// #include <stdio.h>
// int main () {

// int n , rem , sum = 0;

// printf("enter a number ");
// scanf("%d",&n);
// while (n > 0)
// {
//   rem = n % 10;
//   sum = sum  + rem;
//   n = n /10;
// }

// printf("The sum is = %d",sum);
//   return 0;
// }

// #include <stdio.h>

// int add (int A[]);
// int main () {

//  int A[5];
//  int i;
//  int mini;
//  int max;

//  for(i=0; i<5; i++) {
//     scanf("%d",&A[i]);
//  }

// mini = A[0];
// max = A[0];

//  for ( i = 0; i < 5; i++)
//  {
//     if(A[i] > max){
//          max = A[i] ;
//     }
//  }
//  printf("the maximum numner is %d\n",max);
//  printf("the sum is %d",add(A));
// return 0;
// }

// int add (int A[]) {
//   int sum = 0;
//   for(int i = 0; i<5; i++) {
//       sum = sum + A[i];
//   }
//   return sum;
// }

// #include <stdio.h>

// int oddcount (int arr[] , int n);
// int main () {

// int arr[10] = {9,3,5,7,2,4,6,13,19};
// printf("The odd no is : %d",oddcount(arr,10));

//    return 0;
// }
// int oddcount (int arr[] , int n) {
//    int count = 0;
//    for (int i = 0; i<=n; i++) {
//       if(arr[i] % 2 != 0) {
//          count++;
//       }
//    }
//    return count;
// }

// #include <stdio.h>

// int rev(int arr[] , int n);
// void print(int arr[], int n);
// int main () {
//     int arr[] = {10,20,30,40,50};
//     rev(arr, 5);
//     print(arr, 5);

//     return 0;
// }
// int rev (int arr[] , int n) {
//     for (int i = 0; i <n/2; i++) {
//         int firstV = arr[i];
//         int secondV = arr[n-i-1];
//         arr[i] = secondV;
//         arr[n-i-1] = firstV;
//     }
// }
//  void  print(int arr[], int n) {
//     for (int i = 0; i<n; i++) {
//         printf("%d\t",arr[i]);
//     }
    
// }

// #include <stdio.h>
// void HW (int count);
// int main () {
// HW(5);

//     return 0;
// }

// void HW(int count) {
//     if(count == 0) {
//         return;
//     }

//     printf("Hello world\n");
//     HW(count - 1);   
// }

// #include <stdio.h>
// float convertTem (float celsius);
// int main () {
// printf("the celsius is %f",convertTem(50));
//     return 0;
// }
// float convertTem (float celsius) {
//     int far = celsius * (9/5) + 32;
//     return far;
// }
// #include <stdio.h>
// int main () {

// int x = 6;

// printf("%d",x-- + --x);
//     return 0;
// }
// #include <stdio.h>
// int main () {
// int x;
// printf("Enter a number : ");
// scanf("%d",x);
// if (x % 2 == 0) {
//     printf("%d is even number ",x);
// }else {
//     printf("%d is odd number ",x);
// }
//     return 0;
// }

// #include <stdio.h>
// #include <string.h>
// void salting (char password []);
// int main () {
// char password[100];
// printf("Enter your password : ");
// scanf("%s",password);
// salting(password);
//     return 0;
// }
// void salting (char password [] ) {
// char salting [] = "777";
// char newPass[200];
// strcpy(newPass,password);
// strcat(newPass,salting);
// puts(newPass);
// }

//wap to find out factorial number using recursive function 

// #include <stdio.h>
// int m1(int n);
// int main () {
//     int n,f;

//     printf("Enter any number : ");
//     scanf("%d",&n);
//     f = m1(n);
//     printf("the factoral number is : %d",f);
// return 0;
// }
// int m1 (int n ) {

//     if(n<=1) {
//         return 1;
//     }else{
//         return n* m1 (n-1);
//     }
// }

// #include <stdio.h> 
// int numPrint(int n);
// int main () {
// int n = 1;
// printf("enter a number : \n");
// numPrint(n);
//     return 0;
// }
// int numPrint(int n) {
//     if(n<=50) {
//         printf("%d\n",n);
//         numPrint(n+1);
//     }
// }

// #include <stdio.h> 
// int sum (int n);
// int main () {
// int sum = 0;

//     return 0;
// }

// int sum (int n) {
//     if ()

// }

// #include<stdio.h>
 
// int sumOfRange(int);
 
// int main() 
// {
//    int n1;
//    int ram;
  
 
//    printf(" Input the last number of the range starting from 1 : ");
//    scanf("%d", &n1);
 
//    ram = sumOfRange(n1); 
//    printf("\n The sum of numbers from 1 to %d : %d\n\n", n1, ram);
 
//    return (0);
// }
 
// int sumOfRange(int n1) 
// {
//    int sum  = 0;
//    if (n1 == 1) 
//    {
//       return (1);
//    } else 
//    {
//       sum = n1 + sumOfRange(n1 - 1); //calling the function sumOfRange itself
//    }
//    return (sum);
// }

//star pattent 

// #include <stdio.h >
//  int main () {

// int i , j, k;
// for(i=1; i<=5; i++) {
//     for(j=5; j>=i; j--) {
//         printf(" ");
//     }
//     for(k=1; k<=i; k++) {
//         printf("* ");
//     }
//     printf("\n");
// }

//     return 0; 
//  }

// #include <stdio.h>
//  int main () {

// int i,j,k;

// for(i=1; i<=5; i++) {
//     for(j=i; j<=5; j++){
//         printf(" ");
//     }for(k=5; k>=i; k--){
//         printf(" * ");
//     }
//     printf("\n");
// }
//     return 0; 
//  }


// #include <stdio.h>
 
// int main() {  
//     int num, temp, firstDigit, lastDigit, sum;  
    
//     printf("Enter a Number\n"); 
//     scanf("%d", &num);  
//     temp = num;
     
//     /* get last digit of num */
//     lastDigit = num %10;
     
//     while(num > 10){
//         num = num/10;
//     } 
//     firstDigit = num;
//     sum = firstDigit + lastDigit;
//     printf("Sum of first and last digit = %d ",sum);  
   
//     return 0;  
// }/
//pointer 
// #include <stdio.h>
// int main () {

//   int n = 5;
//   int *ptr;
//   ptr = &n;

// printf("%d",&n);

//     return 0;
// }
// int square (int *n);
// int main () {
//     int m;
//     printf("Enter a number : ");
//     scanf("%d",&m);
//     square(&m);
//     printf("the number is : %d",m);


// return 0;
// }
// int square (int *n) {
//     *n = (*n) * (*n);
//     printf("the Square = %d\n",*n);
// }#include <stdio.h>

// int main () {
// int arr[100];
// int n,t;
// printf("Enter the size of array : ");
// scanf("%d",&n);
// for(int i=0; i<n; i++) {
//     printf("enter %d number : ",i);
//     scanf("%d",&arr[i]);
// }

// for(int i = 0; i<n; i++) {
//     for(int j = i+1; j<n; j++) {
//         if( arr[i] > arr[j]) {
//             t = arr[i];
//             arr[i] = arr[j];
//             arr[j] = t;
//         }
//     }
// }
//     for (int i=0; i<n; i++) {
//         printf("%d\t",arr[i]);
//     }
//     return 0;
// }

// int main () {

// char n;
// printf("enter a intput : ");
// scanf("%c",&n);

// if (n <= 'a' || n >= 'z'){
//     printf("The input is the character ");

// }else{
//     printf("the input number a number   ");
// }

//     return 0;
// }

//using the function add of two numbers 

// int add(int a , int b );
// int main () {
// int a , b;
// printf("enter a : ");
// scanf("%d",&a);
// printf("enter b : ");
// scanf("%d",&b);

// int c = add(a,b);

// printf("The sum is %d",c);
//     return 0;
// }

// int add (int a, int b) {

// return a+b;

// }

// int main () {

// int a, b,c;
// printf("enter a : ");
// scanf("%d",&a);
// printf("enter b : ");
// scanf("%d",&b);

// int *p = &a;
// int *q = &b;

// printf("sum is : %d",*p + *q);

//     return  0;

// }

// int main () {
// int a,b, sum, sub, mul, div,rem;
// printf("enter the value for a and b = ");
// scanf("%d %d",&a,&b);

// sum = a+b;
// sub= a-b;
// mul = a*b;
// div = a/b;
// rem = a%b;
// printf("the result for all arithmetic operation are %d\n%d\n%d\n%d\n%d\n",sum,sub,mul,div,rem);

// return 0;
// }


// #include <stdio.h>
// int main () {
//     int i ,j;
//     int arr[3][3];
//     int arr2[3][3];

//     for(i=0; i<3; i++) {
//         for(j=0; j<3; j++){
//             scanf("%d",&arr[i][j]);
//         }
//     }
//     for(i=0; i<3; i++) {
//         for(j=0; j<3; j++){
//             printf("%d ",arr[i][j]);
//         }
//         printf("\n");
//     }

//      for(i=0; i<3; i++) {
//         for(j=0; j<3; j++){
//             scanf("%d",&arr2[i][j]);
//         }
//     }
//     printf("arry two is : => \n");
//     for(i=0; i<3; i++) {
//         for(j=0; j<3; j++){
//             printf("%d ",arr2[i][j]);
//         }
//         printf("\n");
//     }
//     printf("arry two is : => \n");
//     for(i=0; i<3; i++) {
//         for(j=0; j<3; j++){
//             printf("%d ",arr2[i][j] * arr[j][i]);
//         }
//         printf("\n");
//     }
//     return 0;
// }


int main () {
int arr [10];
int *ptr = arr;
for (int i=0; i<=5; i++) {
    scanf("%d",&arr[i]);
}

for(int i=0; i<=5; i++) {
    printf("%d",arr[i]);
}
    return 0;
}



