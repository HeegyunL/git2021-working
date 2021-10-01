package exercise;

public class MySqlDao implements DataAccessObject{

	@Override
	public String select() {
		// TODO Auto-generated method stub
		return "MySql DB에서 검색";
	}

	@Override
	public String insert() {
		// TODO Auto-generated method stub
		return "MySql DB에 삽입";
	}

	@Override
	public String update() {
		// TODO Auto-generated method stub
		return "MySql DB를 수정";
	}

	@Override
	public String delete() {
		// TODO Auto-generated method stub
		return "MySql DB에서 삭제";
	}

}
