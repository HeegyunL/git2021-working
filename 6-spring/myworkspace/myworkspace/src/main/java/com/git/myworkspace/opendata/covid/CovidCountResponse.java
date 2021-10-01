package com.git.myworkspace.opendata.covid;

import java.util.List;

import lombok.Data;

@Data
public class CovidCountResponse {
	private Response response;
	
	@Data
	public class Response{
		private Header header;
		private Body body;
	}
	@Data
	public class Header {
		private String resultCode;
		private String resultMsg;
	}
	@Data
	public class Body {
		private Items items;
	}
	
	@Data
	public class Items {
		private List<Item> item;
	}
	
	@Data
	public class Item {
		private String stdDay;
		private String updateDt;
		private String gubun;
		private String defCnt;
	}
	
	
	
	
	
	
	
	
//	<response>
//	<header>
//	<resultCode>00</resultCode>
//	<resultMsg>NORMAL SERVICE.</resultMsg>
//	</header>
//	<body>
//	<items>
	//	<item>
		//	<createDt>2021-09-30 09:59:13.156</createDt>
		//	<deathCnt>15</deathCnt>
		//	<defCnt>6091</defCnt>
		//	<gubun>°Ë¿ª</gubun>
		//	<gubunCn>Ì°×îÏ¡</gubunCn>
		//	<gubunEn>Lazaretto</gubunEn>
		//	<incDec>9</incDec>
		//	<isolClearCnt>5844</isolClearCnt>
		//	<isolIngCnt>232</isolIngCnt>
		//	<localOccCnt>0</localOccCnt>
		//	<overFlowCnt>9</overFlowCnt>
		//	<qurRate>-</qurRate>
		//	<seq>12416</seq>
		//	<stdDay>2021³â 09¿ù 30ÀÏ 00½Ã</stdDay>
		//	<updateDt>null</updateDt>
	//	</item>
//	</items>
	

}
