package com.example.commerce.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
	private int id; // 자동 증가
	private String productCode;
	private String productName;
	private int Price;
	private int salesProductId; // 타 시스템에 받은 id

}
