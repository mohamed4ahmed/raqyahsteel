import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp, FaPhone, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
                Contact
              </Typography>
              <div>
                <Typography variant="h6" className={classes.subTitle}>
                  Address: As Sulay, 8079, Saudi Arabia, Riyadh 14322, Saudi
                  Arabia
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Phone number:{" "}
                  <a href="tel:+966540600567">
                    <FaPhone /> +966540600567
                  </a>
                  <a href="tel:+966536606915">
                    <FaPhone /> +966536606915
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Email:{" "}
                  <a href="mailto:info@raqyahsteel.com">
                    <MdEmail />
                    info@raqyahsteel.com
                  </a>
                  <a href="mailto:A.elbrbry@raqyahsteel.com">
                    <MdEmail />
                    A.elbrbry@raqyahsteel.com
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
                    href="https://www.messenger.com/t/106075105169019/?messaging_source%3Apages%message_shortlink"
                    target="_blank"
                    aria-label="Messenger"
                    rel="noopener noreferrer" //edit
                  >
                    <FaFacebookMessenger /> Messenger{" "}
                  </a>
                </Typography>
              </div>
              <a
                href="https://www.google.com/maps/place/Raqyah+Company+For+Metal+Works+_%D8%B4%D8%B1%D9%83%D8%A9+%D8%B1%D8%A7%D9%82%D9%8A%D8%A9+%D9%84%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84+%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A%D8%A9%E2%80%AD/@24.6361242,46.8397002,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMkCVU_r7mwusCSfTpHn_VAQ7BHsRfNaCOzvVKZ!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMkCVU_r7mwusCSfTpHn_VAQ7BHsRfNaCOzvVKZ%3Dw86-h128-k-no!7i564!8i844!4m5!3m4!1s0x3e2fa736700efae1:0x367030b537eebc58!8m2!3d24.6360457!4d46.8397448"
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
