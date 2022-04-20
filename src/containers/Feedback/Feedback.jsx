import React, { useEffect, useState } from "react";

import {
	Container,
	Typography,
	MenuItem,
	Select,
	Button,
	TextField,
	Modal,
} from "@material-ui/core";
import { useStyles } from "./Feedback.elements";
import { FaStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import feedbackImg from "../../assets/img/feedback.svg";

import { firebaseInit } from "../../firebase";
import { getUUID } from "../../utils";
import { Link } from "react-router-dom";
import { SpinnerBook } from "../../components";

const labels = {
	1: "What do you feel needs to change?",
	2: "What do you feel needs to change?",
	3: "What do you feel needs to change?",
	4: "What do you feel is not good?",
	5: "Great",
};

const categoryLabels = [
	{
		id: "",
		name: "Select a category",
	},
	
	{
		id: "price",
		name: "Price",
	},
	{
		id: "artmetal",
		name: "Art Metal",
	},
	{
		id: "metal",
		name: "Metal",
	},
	{
		id: "quality",
		name: "Quality",
	},
	{
		id: "timeserver",
		name: "Timeserver",
	},
	{
		id: "anotherthing",
		name: "Another Thing",
	},
];

const FeedbackContainer = () => {
	const classes = useStyles();
	const [rating, setRating] = useState(3);
	const [category, setCategory] = useState("");
	const [comment, setComment] = useState("");
	const [modal, setModal] = useState(false);
	const [spinner, setSpinner] = useState(true);
	const [error, setError] = useState("");

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};
	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (rating === "") {
			setError("rating");
		}

		if (category === "") {
			setError("category");
		}

		if (rating && category !== "") {
			setModal(true);
			firebaseInit
				.firestore()
				.collection("feedback")
				.add({
					id: getUUID(),
					dateCreate: new Date(),
					star: rating,
					category: category,
					review: comment,
					emailAddress: "",
				})
				.then(function () {})
				.catch(function (error) {
					console.error("Error writing document: ", error);
				});
		}
	};

	const handleFeedbackContinueButton = () => {
		setModal(false);
		setRating(3);
		setCategory("");
		setComment("");
	};

	useEffect(() => {
		setTimeout(() => {
			setSpinner(false);
		}, 2300);
	}, []);

	return (
		<div className={classes.feedback}>
			{spinner ? (
				<SpinnerBook />
			) : (
				<>
					<Modal
						open={modal}
						onClose={() => setModal(false)}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						className={classes.modal}
					>
						<Container maxWidth="lg" className={classes.modalComponent}>
							<span className={classes.icon} onClick={() => setModal(false)}>
								<IoCloseCircleOutline />
							</span>
							<Typography
								variant="h4"
								className={`${classes.headerText} ${classes.headerTextModal}`}
							>
								RAQYAH STEEL
							</Typography>
							<p className={classes.description}>Thank you for comment!</p>
							<div className={classes.buttonGroup}>
								<Link to="/">
									<Button variant="contained" className={classes.button}>
									Go to homepage
									</Button>
								</Link>
								<Button
									variant="contained"
									className={`${classes.button} ${classes.secondButtonModal}`}
									onClick={handleFeedbackContinueButton}
								>
									Continue to comment
								</Button>
							</div>
						</Container>
					</Modal>
					<Container maxWidth="lg" className={classes.container}>
						<div className={classes.row}>
							<div className={classes.column}>
								<div className={classes.textWrapper}>
									<Typography variant="h4" className={classes.headerText}>
									Evaluate
									</Typography>
									<p className={classes.description}>
									Each of your comments will help RAQYAH's service improve
											more every day!
									</p>
									<ReactStars
										count={5}
										onChange={(newRating) => {
											setRating(newRating);
										}}
										size={50}
										isHalf={false}
										emptyIcon={<FaStar />}
										fullIcon={<FaStar />}
										activeColor="#ffd700"
										a11y={false}
										value={rating}
										classNames={classes.rating}
									/>

									{rating !== null && (
										<p className={classes.label}>{labels[rating]}</p>
									)}
									<p id="category" className={classes.label}>
									List of comments: (*)
									</p>
									<Select
										labelId="demo-simple-select-helper-label"
										id="demo-simple-select-helper"
										value={category}
										onChange={handleCategoryChange}
										className={classes.selectCategory}
										variant="outlined"
									>
										{categoryLabels.map((item, index) => (
											<MenuItem value={item.id} key={index}>
												{item.name}
											</MenuItem>
										))}
									</Select>
									<p id="comment" className={classes.label}>
									Share your opinion:
									</p>
									<TextField
										aria-label="minimum height"
										rows={4}
										multiline
										value={comment}
										onChange={handleCommentChange}
										className={classes.textarea}
										variant="outlined"
										placeholder="Typing...."
									/>
									<Button
										variant="contained"
										className={classes.button}
										onClick={handleSubmit}
										disabled={category ? false : true}
									>
										Send comments
									</Button>
									{error && (
										<p className={`${classes.label} ${classes.error}`}>
											Error: Please enter text in: {error}
										</p>
									)}
								</div>
							</div>
							<div className={classes.column}>
								<div className={classes.imgWrapper}>
									<LazyLoadImage
										src={feedbackImg}
										alt="img"
										className={classes.img}
										effect="blur"
									/>
								</div>
							</div>
						</div>
					</Container>
				</>
			)}
		</div>
	);
};

export default FeedbackContainer;
