import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	footer: {
		background: "#191919",
		color: "#fff",
		fontSize: "19px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderTop: "2px solid rgba(246,194,73, 1)",
	},
	footer__wrap: {
		margin: "5px auto",

		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},

	footer__logo: {
		height: "80px",
		color: "#fff",
		textDecoration: "none",
		fontSize: "20px",

		display: "flex",
		justifySelf: "flex-start",
		alignItems: "center",

		cursor: "pointer",
	},

	footer__logoImg: {
		height: "60px",
		border: 0,

		padding: "10px",

		display: "inline-block",
		verticalAlign: "middle",
		objectFit: "contain",
	},

	footer__center: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},

	footer__centerText: {
		"&:nth-child(2)": {
			marginLeft: "5px",
		},
	},

	footer__centerMo: {
		color: "#fff",

		"&:hover": {
			color: "#0467fb",
		},
	},

	footer__right: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		[theme.breakpoints.down("md")]: {
			marginTop: "20px",
		},
	},

	footer__rightLink: {
		cursor: "pointer",
		color: "#fff",
		fontSize: "32px",
		"&:nth-child(2)": {
			marginLeft: "15px",
		},
		"&:hover": {
			color: "rgba(246,194,73, 1)",
		},
	},
}));

// import { makeStyles } from "@material-ui/core/styles";

// export const useStyles = makeStyles((theme) => ({
//   footer: {
//     height: "calc(100vh - 80px)", //edit here cant trust
//     background: "#191919",
//     color: "#fff",
//     fontSize: "19px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     borderTop: "2px solid rgba(79, 164, 221, 0.8)",
//   },
//   footer__wrap: {
//     height: "100%", //edit here cant trust
//     margin: "5px auto",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",

//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//     },
//   },

//   info: {
//     background: "#7e7a7a", //edit here
//   },

//   subTitle: {
//     color: "white",
//     padding: "10px 0",

//     [theme.breakpoints.down("md")]: {
//       padding: "5px 0",
//     },
//     "& a": {
//       color: "rgba(79, 164, 221, 0.8)",
//       cursor: "pointer",
//     },
//   },
//   addes: {
//     color: "rgba(79, 164, 221, 0.9 )",
//   },
//   nav__link: {
//     // height: "100%",
//     textDecoration: "none",
//     textTransform: "uppercase",

//     color: "#1f263a",
//     padding: "3px 5px",

//     display: "flex",
//     alignItems: "center",
//     [theme.breakpoints.down("md")]: {
//       // width: "100%",
//       padding: "10px",
//       textAlign: "center",
//       display: "table",

//       "&:hover": {
//         color: "#4b59f7",
//         transition: "all 0.3s ease",
//       },
//     },
//   },

//   nav__item: {
//     // height: "80px",
//     borderBottom: "5px solid transparent",

//     "&:hover": {
//       borderBottom: "5px solid #4b59f7",
//     },
//     [theme.breakpoints.down("md")]: {
//       // width: "100%",
//       "&:hover": {
//         border: "none",
//       },
//     },
//   },

//   activeClass: {
//     borderBottom: "5px solid #4b59f7",
//     [theme.breakpoints.down("md")]: {
//       borderBottom: "none",
//       fontSize: "25px",
//     },
//   },

//   footer__logo: {
//     height: "50%",
//     width: "200px", //edit here cant trust

//     color: "#fff",
//     textDecoration: "none",
//     fontSize: "20px",

//     display: "flex",
//     justifySelf: "flex-start",
//     alignItems: "center",

//     cursor: "pointer",
//   },

//   footer__logoImg: {
//     height: "60px",
//     width: "200px", //edit here cant trust

//     border: 0,

//     padding: "10px",

//     display: "inline-block",
//     verticalAlign: "middle",
//     objectFit: "contain",
//   },

//   footer__center: {
//     display: "flex",
//     justifyContent: "center",
//     flexDirection: "row",

//     [theme.breakpoints.down("md")]: {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   },

//   footer__centerText: {
//     "&:nth-child(2)": {
//       marginLeft: "5px",
//     },
//   },

//   footer__centerMo: {
//     color: "#fff",

//     "&:hover": {
//       color: "#0467fb",
//     },
//   },

//   footer__right: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",

//     [theme.breakpoints.down("md")]: {
//       marginTop: "20px",
//     },
//   },

//   footer__rightLink: {
//     cursor: "pointer",
//     color: "#fff",
//     fontSize: "32px",
//     "&:nth-child(2)": {
//       marginLeft: "15px",
//     },
//     "&:nth-child(3)": {
//       marginLeft: "15px",
//     },
//     "&:hover": {
//       color: "rgba(79, 164, 221, 0.8)",
//     },
//   },
// }));