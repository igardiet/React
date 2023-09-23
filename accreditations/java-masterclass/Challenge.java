public class Challenge
{
    public static void main(String[] args)
    {
        double myFirstValue = 20.00;
        double mySecondValue = 80.00;
        double myValuesTotal = (myFirstValue + mySecondValue) * 100.00;
        System.out.println("myValuesTotal: " + myValuesTotal);
        double theRemainder = myValuesTotal % 40.00;
        System.out.println("theRemainder: " + theRemainder);
        boolean isNoRemainder = (theRemainder == 0) ? true : false;
        System.out.println("isNoRemainder: " + isNoRemainder);
        if (!isNoRemainder)
        {
            System.out.println("Got some remainder");
        }
    }
}
