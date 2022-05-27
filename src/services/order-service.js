import { orderModel } from '../db';

import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

class OrderService {
	// 본 파일의 맨 아래에서, new OrderService(orderModel) 하면, 이 함수의 인자로 전달됨
	constructor(orderModel) {
		this.orderModel = orderModel;
	}

	// 상품 추가
	async addOrder(orderInfo) {
		// 객체 destructuring
		const { category, name, price, imageUrl, description, inventory, company } =
			orderInfo;

		// db에 저장
		const createdNewOrder = await this.orderModel.create(orderInfo);

		return createdNewOrder;
	}
	// product shortId로 product 찾아서 반환
	async getProductById(productId) {
		const product = await this.productModel.findById(productId);
		return product;
	}

	// 랭킹순으로(많이 팔린 순) 상품 가져오기
	async getRankedProduct() {
		const products = await this.productModel.getRankedProduct();
		return products;
	}

	// product DB에서 랜덤으로 8개의 상품을 가져옴 -> 메인페이지에 띄워줄 용도
	async getRank_8_Product() {
		const products = await this.productModel.findRank_8_Product();
		return products;
	}

	// 카테고리 별로 모아보기
	async getProductsByCategory(category) {
		const products = await this.productModel.findBycategory(category);
		return products;
	}

	async deleteProductByProductId(productId) {
		await productModel.delete(productId);
	}

	// 상품정보 수정
	async setProduct(productId, toUpdate) {
		// 업데이트 진행
		const product = await this.productModel.update({
			productId,
			update: toUpdate,
		});

		return product;
	}
}

const orderService = new OrderService(orderModel);

export { orderService };