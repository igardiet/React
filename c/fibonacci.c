#include <stdio.h>

int main() {
    int n = 20; // Number of Fibonacci numbers to generate
    int first = 0;
    int second = 1;
    int next;

    printf("Fibonacci Sequence: ");

    for (int i = 0; i < n; i++) {
        printf("%d ", first);

        next = first + second;
        first = second;
        second = next;
    }

    return 0;
}
