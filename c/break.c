#include <stdio.h>

int main()
{
    int number = 5;
    int i = 0;
    while (1)
    {
        printf("%d", 1);
        if (i == number)
        {
            printf("\nFound!\n");
            break;
        }
        i++;
    }
    return 0;
}