package com.git.myworkspace.opendata.air;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Index;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(indexes = @Index(name="idx_air_si_gun_gu_hour_1", columnList="sidoName, cityName"))
@IdClass(AirSigunguHourId.class)
public class AirSigunguHour {
	
	//시간 , 지역1, 지역2
	//2021-09-30 14:00 , 서울, 강남구
	//24,3,2,3,3,2,
	
	//dataTime, sidoName, cityName 결합하면 유일한 PK 만들어낼 수 있음
	// 유일성, 최소성, 대표성
	@Id
	private String dataTime;
	@Id
	@Column(columnDefinition = "varchar(20) collate \"ko_KR.utf8\"")
	private String sidoName;	//밀도가 커봤자 5%, 분포도가 커봤자 20, 인덱스 제외
	@Id
	@Column(columnDefinition = "varchar(20) collate \"ko_KR.utf8\"")
	private String cityName;
	
	//값
	private Integer pm10Value;
	private Integer pm25Value;

		

}
