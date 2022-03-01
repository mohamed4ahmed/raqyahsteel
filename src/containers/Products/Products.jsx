import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct, fetchProduct } from "../../api";
import {
	Door,
	Kitchen,
	Decor,
	Stair,
	Glass,
	Outside,
	Partation,
	Handmade,
	Stanlissteal,
} from "../../app/ItemTypes";
import {
	setProductSpecial,
	setHeroProduct,
	setProductsList,
} from "../../app/slice/fetchApi";
import { SpinnerBook, HeroPage, ProductsList } from "../../components";

const Products = () => {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.api.productsList);
	const heroProduct = useSelector((state) => state.api.heroProduct);

	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		if (!productsList) {
			fetchProduct()
				.then((products) => {
					const special = [];

					const door = [];
					const kitchen = [];
					const decor = [];
					const stair = [];
					const glass = [];
					const outside = [];
					const partation = [];
					const handmade = [];
					const stanlissteal = [];

					products.map((product, index) => {
						if (product.projectType === Door) door.push(product);
						else if (product.projectType === Kitchen) kitchen.push(product);
						else if (product.projectType === Decor) decor.push(product);
						else if (product.projectType === Stair) stair.push(product);
						else if (product.projectType === Glass) glass.push(product);
						else if (product.projectType === Outside) outside.push(product);
						else if (product.projectType === Partation) partation.push(product);
						else if (product.projectType === Handmade) handmade.push(product);
						else if (product.projectType === Stanlissteal) stanlissteal.push(product);

						product.special && special.push(product);

						return null;
					});
					let action;
					const object = {
						special: special,
						door: door,
						kitchen: kitchen,
						decor: decor,
						stair: stair,
						glass: glass,
						outside: outside,
						partation: partation,
						handmade: handmade,
						stanlissteal: stanlissteal,
					};
					action = setProductsList(object);
					dispatch(action);
					action = setProductSpecial(special);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, productsList]);

	useEffect(() => {
		if (!heroProduct) {
			fetchHeroProduct()
				.then((data) => {
					const action = setHeroProduct(data);
					dispatch(action);
				})
				.catch((error) => console.log("error", error));
		}
	}, [dispatch, heroProduct]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					{" "}
					<HeroPage slides={heroProduct} idScrollTo="productList" />
					<ProductsList products={productsList} />
				</>
			)}
		</>
	);
};

export default Products;