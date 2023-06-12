#include <stdio.h>

int main()
{
    printf("How many pizza slices did you eat: ");
    int slices;
    scanf("%d", &slices);
    int caloriesPerSlice = 250;

    switch (slices)
    {
    case 1:
        printf("One slice\n");
        break;
    case 2:
        printf("Two slices\n");
        break;
    case 3:
        printf("Three slices\n");
        break;
    case 4:
        printf("Four slices\n");
        break;
    default:
        printf("Too much slices!\n");
        break;
    }
    printf("You had %d calories.\n", caloriesPerSlice * slices);

    return 0;
}