package com.example.sales.Product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ProductController {
	private ProductService service;

	public ProductController(ProductService service) {
		this.service = service;
	}

	@PostMapping(value = "/products")
	public ProductCreateResponse addProduct(@RequestBody ProductCreateRequest productRequest) {

		// 데이터 검증

		// DB 저장
		Product product = Product.builder().id(1).name(productRequest.getName()).code("P0001")
				.unitPrice(productRequest.getUnitPrice()).build();
		// (event)외부 시스템에추가된 데이터 보내

		service.sendProduct(product);
		return null;
	}

}
