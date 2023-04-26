#include <stdio.h>

int main()
{
	printf("How many animals are?: ");
	double animals;
	
	scanf("%lf", &animals);

	printf("%f\n%e\n%g\n", animals, animals, animals);
	return 0;
}

/*
Conversion characters:
%f - Decimal notation
%e - Scientific notation
%g - Computer decides
	< -4
	> 5
*/
