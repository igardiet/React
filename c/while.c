#include <stdio.h>

int main()
{
    int i = 0;
    while (i < 10)
    {
        printf("%d ", i);
        i++;
    }
    for (int k = 0; k < 10; k++)
    {
        i++;
        printf("%d ", i);
    }
    return 0;
}