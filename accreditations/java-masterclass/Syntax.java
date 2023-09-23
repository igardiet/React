public class Syntax
{
    public static void main(String[] args)
    {
        System.out.println("Hello River");

        boolean isAlien = false;
        if (isAlien == false)
        {
            System.out.println("It is not an alien!");
            System.out.println("It's a human!");
        }

        int topScore = 80;
        if (topScore < 100)
        {
            System.out.println("High Score!");
        }

        int secondTopScore = 95;
        if ((topScore > secondTopScore) && (topScore < 100))
        {
            System.out.println("Greater than second top score and less than 100");
        }

        if ((topScore > 90) || (secondTopScore <= 90))
        {
            System.out.println("Either or both of the conditions are true");
        }

        int newValue = 50;
        if (newValue == 50)
        {
            System.out.println("Error 1");
        }

        boolean isCar = false;
        if (!isCar)
        {
            System.out.println("Error 2");
        }
    }
}