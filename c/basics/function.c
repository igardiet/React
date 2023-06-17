#include <stdio.h>

int factorial(int number)
{
    int factorial = 1;

    for (int i = number; i > 1; i--)
    {
        factorial *= i;
    }
    return factorial;
}

int main()
{
    printf("%d ", factorial(5));
    printf("%d ", factorial(4));

    printf("%d ", factorial(factorial(3)));
    return 0;
}