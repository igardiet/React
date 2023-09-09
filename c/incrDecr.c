#include <stdio.h>

int main()
{
	int aNumber = 50;
	int bNumber = 110;
	int cNumber = 232;
	int dNumber = 499;

	int aOutput = aNumber++;
	int bOutput = ++bNumber;
	int cOutput = cNumber--;
	int dOutput = --dNumber;

	printf("output: %i\n", aOutput);
	printf("number: %i\n", aNumber);

	printf("output: %i\n", bOutput);
	printf("number: %i\n", bNumber);

	printf("output: %i\n", cOutput);
	printf("number: %i\n", cNumber);

	printf("output: %i\n", dOutput);
	printf("number: %i\n", dNumber);

	return 0;
}
