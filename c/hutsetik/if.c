#include <stdio.h>
#include <stdbool.h>

int main()
{
    bool redIsAColor;
    int temp;
    printf("Is red a color? 1 is true and 0 is false: ");
    scanf("%d", &temp);
    redIsAColor = temp;

    if(redIsAColor)
    {
        printf("True statement!\n");
    }
}