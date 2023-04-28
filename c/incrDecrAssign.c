#include <stdio.h>

int main()
{
	int rations = 100;
	printf("rations: %i\n", rations);
	rations += 100;
	printf("rations: %i\n", rations);
	rations -= 100;
	rations *= 2;
	rations /= 4;
	rations %= 5;
	printf("rations: %i\n", rations);
	return 0;
}
