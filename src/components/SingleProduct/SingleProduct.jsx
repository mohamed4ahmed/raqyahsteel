import {
  CircularProgress,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./SingleProduct.elements";
import { FaAngellist, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlockContent from "@sanity/block-content-to-react";

const SingleProduct = ({ product, special }) => {
  const classes = useStyles();
  return (
    <div className={classes.singleProduct}>
      {!product ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.productComponent}>
          <Container maxWidth="lg">
            <div className={classes.product}>
              <div className={classes.breadcrumbs}>
                <Link to="/products">PRODUCTS </Link>
                <Link to="/products"> | {product.projectType} </Link>
                <p> | {product.title}</p>
              </div>
              <div className={classes.body}>
                <div className={classes.productImg}>
                  <img
                    src={product.mainImage.asset.url}
                    alt={product.mainImage.asset._id}
                    className={classes.img}
                  />
                </div>
                <div className={classes.content}>
                  <div className={classes.header}>
                    <Typography variant="h4" className={classes.headerText}>
                      {product.title}
                    </Typography>
                    {/* <p className={classes.price}>{product.price}.000 SR</p> */}
                    <Link to="/stores/">
                      <Button
                        variant="contained"
                        className={`${classes.button}`}
                      >
                        BUY NOW
                      </Button>
                    </Link>
                    <p className={classes.phone}>
                      {" "}
                      Call for delivery:{" "}
                      <a href="tel:++966540600567">+966540600567</a>
                    </p>

                    <p className={classes.phone}>
                      {" "}
                      Order By WhatsApp:{" "}
                      <a
                        href="whatsapp://send?text=order-from-website&phone=+966540600567"
                        className={classes.whatsappicon}
                      >
                        <FaWhatsapp />
                      </a>
                      {/* <a
                        href="whatsapp://send?text=order-from-website&phone=+966536606915"
                        className={classes.whatsappicon}
                      >
                        <FaWhatsapp />
                      </a> */}
                      <Typography variant="h6" className={classes.subTitle}>
                        {" "}
                        WhatsApp:{" "}
                        <a href="whatsapp://send?text=test&phone=+966536606915">
                          <FaWhatsapp />
                        </a>
                      </Typography>
                    </p>

                    <p className={classes.phone}>
                      {" "}
                      Order By Messenger:{" "}
                      <a
                        href="https://www.google.com/maps/place/Raqyah+Company+For+Metal+Works+_%D8%B4%D8%B1%D9%83%D8%A9+%D8%B1%D8%A7%D9%82%D9%8A%D8%A9+%D9%84%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84+%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A%D8%A9%E2%80%AD/@24.6361242,46.8397002,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMkCVU_r7mwusCSfTpHn_VAQ7BHsRfNaCOzvVKZ!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMkCVU_r7mwusCSfTpHn_VAQ7BHsRfNaCOzvVKZ%3Dw86-h128-k-no!7i564!8i844!4m5!3m4!1s0x3e2fa736700efae1:0x367030b537eebc58!8m2!3d24.6360457!4d46.8397448" //edit
                        className={classes.whatsappicon}
                        target="_blank"
                        aria-label="Facebook"
                        rel="noreferrer"
                      >
                        <FaFacebookMessenger />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.blockContent}>
                <BlockContent
                  blocks={product.body}
                  projectId="krn450bd"
                  dataset="production"
                />
              </div>
              <div className={classes.headerRecentPosts}>
                <Typography
                  variant="h5"
                  className={classes.headerRecentPostsText}
                >
                  YOU MAY LIKE
                </Typography>
              </div>
              <div className={classes.listProduct}>
                {!special ? (
                  <div className={classes.spinner}>
                    <CircularProgress />
                  </div>
                ) : (
                  special.map((product, index) => (
                    <div className={classes.specialProduct} key={index}>
                      <div className={classes.productImage}>
                        <Link to={"/products/" + product.slug.current}>
                          <LazyLoadImage
                            src={product.mainImage.asset.url}
                            alt={product.mainImage.asset.alt}
                            className={`${classes.img} ${classes.imgSpecial}`}
                            effect="blur"
                          />
                          {product.new && (
                            <span className={classes.newLabel}>
                              new <FaAngellist />
                            </span>
                          )}
                          {product.bestSeller && (
                            <span className={classes.trendLabel}>
                              <AiOutlineLike /> Bestseller
                            </span>
                          )}
                        </Link>
                      </div>
                      <div className={classes.contentProduct}>
                        <p className={classes.title}>{product.title}</p>
                        {/* <p className={classes.price}>{product.price}.000SR</p> */}
                        <Link to={"/products/" + product.slug.current}>
                          <Button
                            variant="contained"
                            className={`${classes.button} ${classes.buttonProduct}`}
                          >
                            LOOKING FOR DETAILS
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
