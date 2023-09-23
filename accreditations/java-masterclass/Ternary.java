public class Ternary
{
    public static void main(String[] args)
    {
        String makeOfCar = "Audi";
        // boolean isDomestic = makeOfCar == "Audi" ? false : true;
        boolean isDomestic = (makeOfCar != "Audi");
        if (isDomestic)
        {
            System.out.println("The car is domestic");
        }

        int ageOfClient = 25;
        String ageText = (ageOfClient >= 18) ? "Over Eighteen" : "Minor age";
        System.out.println("The client is " + ageText);

        String s = (isDomestic) ? "The car is domestic" : "The car is not domestic";
        System.out.println(s);
    }
}