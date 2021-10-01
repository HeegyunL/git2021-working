package exercise;

public class OracleDao implements DataAccessObject {

	@Override
	public String select() {
		// TODO Auto-generated method stub
		return "Oracle DB에서 검색";
	}

	@Override
	public String insert() {
		// TODO Auto-generated method stub
		return "Oracle DB에 삽입";
	}

	@Override
	public String update() {
		// TODO Auto-generated method stub
		return "Oracle DB를 수정";
	}

	@Override
	public String delete() {
		// TODO Auto-generated method stub
		return "Oracle DB에서 삭제";
	}

}
