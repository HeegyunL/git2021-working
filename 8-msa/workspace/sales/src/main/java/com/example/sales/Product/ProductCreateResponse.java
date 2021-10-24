package com.example.sales.Product;

import com.example.sales.Result;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductCreateResponse {
	private Product product;
	private Result result;
}
