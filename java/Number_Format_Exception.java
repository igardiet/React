import java.util.Scanner;

public class Number_Format_Exception
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter an integer:");

        try
        {
            String strNum = scanner.nextLine();
            int intNum = Integer.parseInt(strNum);
            System.out.println("Number converted from string to integer: " + intNum);
        }

        catch (NumberFormatException exception)
        {
            System.out.println("ERROR: Invalid data.");
        }

        finally
        {
            scanner.close();
        }
    }
}