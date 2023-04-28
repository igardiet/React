#include <stdio.h>

int main()
{
	int slicesOfCake = 9;
	int eaters = 2;
	int leftOver = slicesOfCake % eaters;

	printf("%i\n", leftOver);

	return 0;
}
