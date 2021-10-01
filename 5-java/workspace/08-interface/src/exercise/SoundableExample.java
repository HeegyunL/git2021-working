package exercise;

public class SoundableExample {

	public static void printSound(Soundalbe soundable) {
		// TODO Auto-generated method stub
		System.out.println(soundable.sound());
	}
	public static void main(String[] args) {
		printSound(new Cat());
		printSound(new Dog());
	}

}
