#include <stdio.h>

int main()
{
	int money = 25;
	int bill = 15;

	int total = money - -bill; // equal to 25 + 15
	printf("%i\n", total);
	printf("%i\n", bill);

	return 0;
}
