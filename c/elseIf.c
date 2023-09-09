#include <stdio.h>
int main()
{
    printf("Choose a menu option 1-4:\n");
    printf("1. Add a patient\n");
    printf("2. View a patient\n");
    printf("3. Search patients\n");
    printf("4. Exit:\n");

    int input;
    scanf("%d", &input);

    if (input == 1)
    {
        printf("Adding a patient\n");
    }
    else if (input == 2)
    {
        printf("Viewing a patient\n");
    }
    else if (input == 3)
    {
        printf("Searching patients\n");
    }
    else if (input == 4)
    {
        printf("Exiting...");
        printf("Save? Y/N: ");
        char q;
        getchar();
        scanf("%c", &q);

        if (q == 'Y' || q == 'y')
        {
            printf("Saving changes!\n");
        }
        else if (q == 'N' || q == 'n')
        {
            printf("Changes were not saved!\n");
        }
        else
        {
            printf("Incorrect characters, data could not be read\n");
        }
    }
    else
    {
        printf("Incorrect input");
    }
    return 0;
}