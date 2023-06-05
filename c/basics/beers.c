#include <stdio.h>

int main()
{
	printf("The number of beers for the day: ");

	int beers;
	scanf("%i", &beers);

	double dozen = (double) beers / 12;

	printf("You have %f dozen beers.\n", dozen);

	return 0;
}
