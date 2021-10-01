package exam;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class BankApplication {

	// Map 여러가지 형태의 Map 가능한 타입(Inteface)
	// = HashMap
	// = HashTable
	// = TreeMap
	//
	// 대입하는 자료구조에 따라서 같은 메서드를 호출하더라도
	// 내부적인 처리방식이 다름

	// 계좌목록 Map 객체
	// Map<키타입, 값타입> 변수명 = new HashMap<키타입, 값타입>();
	private static Map<String, Account> accounts = new HashMap<String, Account>();

	private static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		boolean run = true;
		while (run) {
			System.out.println("----------------------------------------------------------");
			System.out.println("1.계좌생성 | 2.계좌목록 | 3.예금 | 4.출금 | 5.종료");
			System.out.println("----------------------------------------------------------");
			System.out.print("선택> ");

			int selectNo = scanner.nextInt();

			if (selectNo == 1) {
				createAccount();
			} else if (selectNo == 2) {
				accountList();
			} else if (selectNo == 3) {
				deposit();
			} else if (selectNo == 4) {
				withdraw();
			} else if (selectNo == 5) {
				run = false;
			}
		}
		System.out.println("프로그램 종료");
	}

	// 계좌생성하기(계좌추가하기)
	private static void createAccount() {
		System.out.println("--------------");
		System.out.println("    계좌 생성   ");
		System.out.println("--------------");
		String name = "";
		String ANO = "";
		int BALANCE = 0;
		System.out.print("계좌번호>");
		ANO += scanner.next();
		System.out.print("이름>");
		name += scanner.next();
		System.out.print("초기입금액>");
		BALANCE += scanner.nextInt();
		accounts.put(ANO, new Account(ANO,name,BALANCE));
		System.out.println("결과 : 계좌가 생성되었습니다.");
	}

	// 계좌목록보기
	private static void accountList() {
		System.out.println("--------------");
		System.out.println("    계좌 목록   ");
		System.out.println("--------------");
		for(Account account : accounts.values()) {
			String ano = account.getAno();
			int balance = account.getBalance();
			System.out.println(account.getAno() + "\t" + account.getOwner() + "\t" + balance);
		}
	}

	// 예금하기(필드값수정)
	private static void deposit() {
		System.out.println("계좌번호 : ");
		Account aAccount = accounts.get(scanner.next());
		System.out.println("예금액 : ");
		aAccount.setBalance(scanner.nextInt() + aAccount.getBalance());
		System.out.println(aAccount.getBalance());
		System.out.println("결과 : 예금이 성공되었습니다.");
	}

	// 출금하기(필드값수정)
	private static void withdraw() {
		System.out.println("계좌번호 : ");
		Account aAccount = accounts.get(scanner.next());
		System.out.println("출금액 : ");
		aAccount.setBalance(-scanner.nextInt() + aAccount.getBalance());
		System.out.println(aAccount.getBalance());
		System.out.println("결과 : 출금이 성공되었습니다.");
	}
}