#include <stdio.h>

int main()
{
    int i = 0, k;
    while (i < 11)
    {
        int k = i;
        i++;

        while (k >= 0)
        {
            printf("%d ", k);
            k--;
        }
        printf("\n");
    }
    return 0;
}