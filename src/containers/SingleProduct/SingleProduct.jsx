import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchSingleProduct } from "../../api";
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
import { setProductsList, setProductSpecial } from "../../app/slice/fetchApi";
import { SingleProduct, SpinnerBook } from "../../components";

const SingleProductContainer = () => {
	const [singleProduct, setSingleProduct] = useState(null);
	const [spinner, setSpinner] = useState(true);

	const special = useSelector((state) => state.api.products.special);

	const { slug } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!special) {
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
	}, [dispatch, special]);

	useEffect(() => {
		fetchSingleProduct(slug)
			.then((data) => {
				setSingleProduct(data[0]);
			})
			.catch((error) => console.log("error: ", error));
	}, [slug]);

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<div className="">
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<SingleProduct product={singleProduct} special={special} />
				</>
			)}
		</div>
	);
};

export default SingleProductContainer;
