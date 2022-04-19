import { Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.elements";
import logoImg from "../../assets/img/logo-web-white.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.footer__wrap}>
          <NavLink to="/" className={classes.footer__logo}>
            <img
              src={logoImg}
              alt="logoImg"
              className={classes.footer__logoImg}
            />
          </NavLink>
          <div className={classes.footer__center}>
            <div className={classes.footer__centerText}>
              RAQYAH STEEL @ 2022.
            </div>
            <div className={classes.footer__centerText}>
              Made with ♥ by:{" "}
              <a
                href="https://www.mohamedahmed.ml"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerMo}
              >
                Mohamed Ahmed
              </a>
            </div>
          </div>
          <div className={classes.footer__right}>
            <a
              className={classes.footer__rightLink}
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=RAQYA-METAL-106075105169019/"
              target="__blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={classes.footer__rightLink}
              rel="noopener noreferrer"
              href="https://instagram.com/raqyametal/?utm_medium=copy_link"
              target="__blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={classes.footer__rightLink}
              href="whatsapp://send?text=order-from-website&phone=+201065060411"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

// import { Container, Typography } from "@material-ui/core";
// import React from "react";
// import { useStyles } from "./Footer.elements";
// import logoImg from "../../assets/img/logo-web-white.png";
// import { NavLink } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
// import { GrMail } from "react-icons/gr";
// import { SiGooglemaps } from "react-icons/si";

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.footer}>
//       <Container maxWidth="lg">
//         <div className={classes.footer__wrap}>
//           <div className={classes.info}>
//             <Typography variant="h6" className={classes.subTitle}>
//               العنوان :
//               <a
//                 href="https://www.google.com/maps/place/safka/@31.0914078,30.0063286,9z/data=!4m9!1m2!2m1!1ssafka!3m5!1s0x14f7a3837569d0af:0x5ea168e21e0b6dab!8m2!3d30.9738629!4d31.1822901!15sCgVzYWZrYZIBDmNsb3RoaW5nX3N0b3Jl"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <SiGooglemaps /> Location in Google maps
//               </a>
//             </Typography>

//             <Typography variant="h6" className={classes.subTitle}>
//               لهاتف:{" "}
//               <a href="tel:+201095416155">
//                 <FaPhone /> +201095416155
//               </a>
//             </Typography>

//             <Typography variant="h6" className={classes.subTitle}>
//               البريد :{" "}
//               <a href="mailto:Safka.online.2022@gmail.com">
//                 <GrMail /> Safka.online.2022@gmail.com
//               </a>
//             </Typography>

//             <Typography variant="h6" className={classes.subTitle}>
//               مواعيد العمل : من 7 صباحآ الي 10 مساء علي طوال الاسبوع
//             </Typography>

//             <ul className={classes.nav__menu}>
//               <li className={classes.nav__item}>
//                 <NavLink
//                   to="/products"
//                   className={classes.nav__link}
//                   activeClassName={classes.activeClass}
//                 >
//                   المنتجات
//                 </NavLink>
//               </li>

//               <li className={classes.nav__item}>
//                 <NavLink
//                   to="/blog"
//                   className={classes.nav__link}
//                   activeClassName={classes.activeClass}
//                 >
//                   أخبار
//                 </NavLink>
//               </li>

//               <li className={classes.nav__item}>
//                 <NavLink
//                   to="/membership"
//                   className={classes.nav__link}
//                   activeClassName={classes.activeClass}
//                 >
//                   أعضاء
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <NavLink to="/" className={classes.footer__logo}>
//             <img
//               src={logoImg}
//               alt="logoImg"
//               className={classes.footer__logoImg}
//             />
//           </NavLink>
//           <div className={classes.footer__center}>
//             <div className={classes.footer__centerText}>
//               Safka صــفـقـة للملابس الجاهزة @ 2022.
//             </div>
//             <div className={classes.footer__centerText}>
//               Made with ♥ by:{" "}
//               <a
//                 href="https://www.mohamedahmed.ml"
//                 target="__blank"
//                 aria-label="Facebook"
//                 className={classes.footer__centerMo}
//               >
//                 Mohamed Ahmed
//               </a>
//             </div>
//           </div>
//           <div className={classes.footer__right}>
//             <a
//               className={classes.footer__rightLink}
//               href="https://www.facebook.com/Safka.Online22/"
//               target="__blank"
//               aria-label="Facebook"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               className={classes.footer__rightLink}
//               href="https://www.instagram.com/safka_online21/"
//               target="__blank"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               className={classes.footer__rightLink}
//               href="whatsapp://send?text=order-from-website&phone=+201061061028"
//             >
//               <FaWhatsapp />
//             </a>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Footer;
