import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp, FaPhone, FaFacebookMessenger } from "react-icons/fa";
import Maps from "./Maps/Maps";

const InfoMaps = () => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Container maxWidth="lg">
        <div className={classes.infoRow}>
          <div className={classes.infoColumn}>
            <div className={classes.textWrapper}>
              <Typography variant="h4" className={classes.text}>
                STORE
              </Typography>
              <div>
                <Typography variant="h6" className={classes.subTitle}>
                  Address: Al Asher Men Ramadan - Badr, Cairo , Egypt
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  Phone number: <a href="tel:+201065060411">+201065060411</a>{" "}
                  <a href="tel:+966536606915">
                    <FaPhone /> +966536606915{" "}
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Email:{" "}
                  <a href="mailto:info@smartbeammetal.com">
                    info@smartbeammetal.com
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  WhatsApp:{" "}
                  <a href="whatsapp://send?text=test&phone=+201065060411">
                    <FaWhatsapp /> WhatsApp{" "}
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Messenger:{" "}
                  <a
                    href="https://www.facebook.com/messages/t/106075105169019"
                    target="_blank"
                    aria-label="Facebook"
                    rel="noopener noreferrer" //edit
                  >
                    <FaFacebookMessenger /> Messenger{" "}
                  </a>
                </Typography>
              </div>
              <a
                href="https://www.google.com/maps/place/3017-3565+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%81%D8%AC%D8%B1%D8%8C+An+Narjis,+Riyadh+13322,+Saudi+Arabia%E2%80%AD/@24.8209463,46.6648958,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3e2f03890d489399:0xba974d1c98e79fd5!2sRiyadh+Saudi+Arabia!3b1!8m2!3d24.7135517!4d46.6752957!3m4!1s0x3e2efb559b173f07:0x731f32197b38f05!8m2!3d24.8208887!4d46.6736672"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" className={classes.button}>
                  <SiGooglemaps /> Get Directions
                </Button>
              </a>
            </div>
          </div>
          <div className={classes.infoColumn}>
            <div className={classes.imgWrapper}>
              <Maps />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoMaps;
