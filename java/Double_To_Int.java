import java.util.Scanner;
import java.util.InputMismatchException;

public class Double_To_Int
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");

        try
        {
            double numDouble = scanner.nextDouble();
            double numDoubleRound = Math.round(numDouble);
            int doubleToInt = (int) numDoubleRound;

            System.out.println("Rounded double to integer: " + doubleToInt);
        }

        catch (InputMismatchException exception)
        {
            System.out.println("ERROR: Invalid input. Enter a valid number.");
        }

        finally
        {
            scanner.close();
        }
    }
}