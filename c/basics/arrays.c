#include <stdio.h>

int main()
{
    // ONE WAY
    int myGrades[10];
    myGrades[0] = 10;
    myGrades[1] = 11;

    printf("%d ", myGrades[0]);

    // SECOND WAY
    int otherGrades[] = {10, 12, 14, 15, 16, 17, 54, 34, 23};

    printf("\n%d ", otherGrades[2]);

    return 0;
}