#include <stdio.h>
#include <stdbool.h>

int main()
{
    int input;
    do
    {
        printf("Enter a number 0 - 9: ");
        scanf("%d", &input);
    } while (input < 0 || input > 9);
    return 0;
}