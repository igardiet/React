#include <stdio.h>

int main()
{
    double money = 25;
    double cost = 25;

    money >= cost ? printf("Affordable!\n") : printf("Not affordable, you need %lf more\n", cost - money);

    return 0;
}