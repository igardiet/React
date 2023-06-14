#include <stdio.h>
#include <stdbool.h>
#include <math.h>

int main()
{
    int input;
    bool isPrime;

    printf("Enter a number: ");
    scanf("%d", &input);

    if (input < 2)
    {
        isPrime = false;
    }
    else
    {
        isPrime = true;
        for (int i = 2; i <= sqrt(input); i++)
        {
            if (input % i == 0)
            {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime)
    {
        printf("\nPrime!\n");
    }
    else
    {
        printf("\nNot Prime!\n");
    }

    return 0;
}