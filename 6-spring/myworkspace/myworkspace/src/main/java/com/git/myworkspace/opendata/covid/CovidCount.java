package com.git.myworkspace.opendata.covid;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@Builder
@Table(indexes = @Index(name="idex_covid_count_1",columnList ="gubun, defCnt"))
public class CovidCount {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	
	private String stdDay;
	private String updateDt;
	private String gubun;
	private String defCnt;
	

}
