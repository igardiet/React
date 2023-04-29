#include <stdio.h>

int main()
{
	int slices = 17;
	int people = 2;
	// a 0 can be added to a constant or explicit type casting

	double halfTheCake = (double) (slices / people); // (double) -> unary
	printf("%f\n", halfTheCake);

	double c = 25/2 * 2;
	double d = 25/2 * 2.0;

	printf("c: %f\n", c);
	printf("d: %f\n", d);
	return 0;
}
