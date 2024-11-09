import java.util.Scanner;
import java.util.InputMismatchException;

public class Input_Mismatch_Exception
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        try
        {
            System.out.print("Enter temperature in fahrenheit: ");

            double fahrenheit = scanner.nextDouble();
            double celsius = ((fahrenheit - 32.0) * 5.0) / 9.0;
            int temperature = (int) celsius;

            System.out.println("Celsius temperature: " + temperature + "ºC");
        }

        catch (InputMismatchException e)
        {
            System.out.println("ERROR: Invalid input. Please enter a valid number.");
        }

        finally
        {
            scanner.close();
        }
    }
}