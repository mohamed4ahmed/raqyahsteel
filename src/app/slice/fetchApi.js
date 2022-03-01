import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
	name: API,
	initialState: {
		about: null,
		products: {
			special: null,
			door: null,
			kitchen: null,
			decor: null,
			stair: null,
			glass: null,
			outside: null,
			partation: null,
			handmade: null,
			stanlissteal: null,
		},
		productsList: null,
		posts: null,
		instaPosts: null,
		hero: null,
		heroProduct: null,
		heroBlog: null,
	},
	reducers: {
		setAboutData: (state, action) => {
			state.about = action.payload;
		},
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		setInstaPosts: (state, action) => {
			state.instaPosts = action.payload;
		},
		setHero: (state, action) => {
			state.hero = action.payload;
		},
		setProductSpecial: (state, action) => {
			state.products.special = action.payload;
		},
		setProductDoor: (state, action) => {
			state.products.door = action.payload;
		},
		setProductKitchen: (state, action) => {
			state.products.kitchen = action.payload;
		},
		setProductDecor: (state, action) => {
			state.products.decor = action.payload;
		},
		setProductStair: (state, action) => {
			state.products.stair = action.payload;
		},
		setProductGlass: (state, action) => {
			state.products.glass = action.payload;
		},
		setProductOutside: (state, action) => {
			state.products.outside = action.payload;
		},
		setProductPartation: (state, action) => {
			state.products.partation = action.payload;
		},
		setProductHandmade: (state, action) => {
			state.products.handmade = action.payload;
		},
		setProductStanlissteal: (state, action) => {
			state.products.stanlissteal = action.payload;
		},
		setHeroProduct: (state, action) => {
			state.heroProduct = action.payload;
		},
		setProductsList: (state, action) => {
			state.productsList = action.payload;
		},
		setHeroBlog: (state, action) => {
			state.heroBlog = action.payload;
		},
	},
});

const { reducer, actions } = fetchApi;

export const {
	setAboutData,
	setPosts,
	setInstaPosts,
	setHero,
	setProductSpecial,
	setProductDoor,
	setProductKitchen,
	setProductDecor,
	setProductStair,
	setProductGlass,
	setProductOutside,
	setProductPartation,
	setProductHandmade,
	setProductStanlissteal,
	setHeroProduct,
	setProductsList,
	setHeroBlog,
} = actions;

export default reducer;