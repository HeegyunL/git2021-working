package casting;

public class UserExample {
	public static void main(String[] args) {

		// 일반 사용자
		User user = new User();
		user.setId("hong");
		user.setName("홍길동");
		user.setPhone("01012345678");
		user.printUserInfo();
		
		
		// 관리자
		Admin admin = new Admin();
		// 상속받은 User의 메서드 및 필드를 그대로 사용가능함
		admin.setId("john");
		admin.setName("John Smith");
		admin.setPhone("0212345678");
		admin.printUserInfo();
		// 추가 필드 및 메서드 사용, 부서번호
//		admin.setDeptNo("10001");
		//가능함 Admin <- Admin
		Admin admin2 = (Admin) user;
		// 멤버십 멤버
		Member member = new Member();
		// 상속받은 User의 메서드 및 필드를 그대로 사용가능함
		member.setId("kim");
		member.setName("김쿠팡");
		member.setPhone("01009876543");
//		member.printUserInfo();
		// 추가 필드 및 메서드 사용, 포인트
		member.setPoint(100000);
		member.printUserInfo();
		
		//컴파일 타임에서는 오류가 발생하지 않음
		//실행 타임에서는 오류가 발생함 Admin <- Member
//		intanceof 연산을 통해 해당 클래스의 객체가 맞는지 확인
//		user객체가 Admin 타입의 인스턴인지 확인
		if(user instanceof Admin){
			Admin admin3 = (Admin) user;
		}
		
		
		
//		모든 클래스들의 최상위 부모가 Object 클래스임
//		extends를 쓰지 않고 있지만 내부적으로 extends 되어 있는 상태
		Object obj = new Object();
		obj = user;
//		강제로 형식 객체 형식 변화를 할때는 instanceof 사용
		if(obj instanceof Admin) {
		Admin admin4 = (Admin) obj;
		}
	}
}
