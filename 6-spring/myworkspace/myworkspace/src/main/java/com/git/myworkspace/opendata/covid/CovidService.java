package com.git.myworkspace.opendata.covid;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;

@Service
public class CovidService {
	private final String SERVICE_KEY = "Ev3%2FzqFtlqN%2BzmGpmkNJHdIBga81m1Pbk5ZBWjDuy71cyySLvKaetXQzHjqAijSDSNYxuPazSYHvBFPd2Z6VWw%3D%3D";
	
	private CovidSidoDailyRepository repo;
	
	
	@Autowired
	public CovidService(CovidSidoDailyRepository repo) {
		this.repo = repo;
	}
	
//	@Scheduled(cron = "0 5 10 * * *")
	@CacheEvict(value = "covid-current", allEntries = true)
	@Scheduled(fixedRate = 1000 * 60 * 60 * 1)
	public void requestCovid() throws IOException {
		String[] gubuns = {"서울"};
		for(String gubun : gubuns) {
			requestCovidCountHour(gubun);
		}
	}
	
	@SuppressWarnings("deprecation")
	public void requestCovidCountHour(String gubun) throws IOException {
		System.out.println(new Date().toLocaleString());
		
		
//		http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?GUBUN="서울"&pageNo=1&numOfRows=10&startCreateDt=20200410&endCreateDt=20200410
//			&serviceKey=Ev3%2FzqFtlqN%2BzmGpmkNJHdIBga81m1Pbk5ZBWjDuy71cyySLvKaetXQzHjqAijSDSNYxuPazSYHvBFPd2Z6VWw%3D%3D
		
		StringBuilder builder = new StringBuilder();
		builder.append("http://openapi.data.go.kr/openapi");	//호스트/게이트웨이 
		builder.append("/service/rest/Covid19");	//서비스
		builder.append("/getCovid19SidoInfStateJson"); //기능
		builder.append("?GUBUN="+URLEncoder.encode(gubun,"UTF-8"));
		builder.append("&pageNo=1&numOfRows=10&startCreateDt=20200410&endCreateDt=20200410");
		builder.append("&serviceKey=" + SERVICE_KEY);
		
		System.out.println(builder.toString());//올바른 주소를 생성했느지 확인!
		
		URL url = new URL(builder.toString());
		
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		
		byte[] result = con.getInputStream().readAllBytes(); 
		
		
		String data = new String(result, "UTF-8");
		
//		System.out.println(data);
//		-----------------데이터 요청하고 XML 받아오기 끝-------------------
		
		 
//		-----------------XML -> JSON -> Object(JAVA) start-----------------
		String json = XML.toJSONObject(data).toString(2);
//		System.out.println(json);
		
		CovidSidoDailyResponse response = new Gson().fromJson(json,CovidSidoDailyResponse.class);
		System.out.println(response);
//		CovidCountResponse.Item item= response.getResponse().getBody().getItems().getItem().get(1);
//		System.out.println(item);
//		
//		-----------------XML -> JSON -> Object(JAVA) end -----------------
		
//		-----------------응답 객체 -> 엔티티 시작 -----------------
		List<CovidSidoDaily> list = new ArrayList<CovidSidoDaily>();
		for (CovidSidoDailyResponse.Item item: response.getResponse().getBody().getItems().getItem()){
			CovidSidoDaily record = CovidSidoDaily.builder()
								.stdDay(item.getStdDay())
								.gubun(item.getGubun())
								.incDec(item.getIncDec())
								.defCnt(item.getDefCnt())
								.overFlowCnt(item.getOverFlowCnt().isEmpty() ? null : Integer.valueOf(item.getOverFlowCnt()))
								.localOccCnt(item.getLocalOccCnt().isEmpty() ? null : Integer.valueOf(item.getLocalOccCnt()))
								.build();
			
			list.add(record);
		}
//		-----------------응답 객체 -> 엔티티 끝 -----------------
//		-----------------엔티티 객체 -> 리포지터리  저장 시작 -----------------
		repo.saveAll(list);
//		-----------------엔티티 객체 -> 리포지터리  저장 끝 -----------------
		
	}

}
 