package StatementsWhiteSpaceAndIndenting;

public class Main
{
    public static void main(String[] args)
    {
        int myVariable = 50;

        // It is an expression till the ; (semicolon) is added to make it a
        // statement
        myVariable++;
        myVariable--;

        System.out.println("Test");

        int anotherVariable = 50;
        myVariable--;
        System.out.print("myVariable = " + myVariable);

        if (myVariable == 0)
        {
            System.out.println("It's now zero");
        }
    }
}
