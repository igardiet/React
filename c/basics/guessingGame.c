#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    srand(time(NULL));
    int randomNumber = rand() % 5;

    // printf("%d\n", randomNumber);
    printf("Pick a number 0 - 5. If you guess right, you win!\n");
    printf("Guess wrong and face your fate...");
    int guess;
    scanf("%d", &guess);

    printf("You guessed %d\n ", guess);
    printf("The correct answer was %d\n", randomNumber);

    if (guess == randomNumber)
    {
        printf("You win!\n");
        return 0;
    }
    else
    {
        printf("You lose! Try again\n");
        return 0;
    }
    {
        printf("Thak you for playing!\n");
        return 0;
    }
}