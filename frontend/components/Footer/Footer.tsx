import { Divider, Image } from "@mantine/core";
import { BrandFacebook, BrandInstagram, BrandLinkedin, BrandTwitter, BrandYoutube, Mail, Phone } from "tabler-icons-react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.root}>
      <Divider />
      <br />
      <br />
      <div>
        <div className={classes.logoContainer}>
          <Image src={"/assets/logo/open_auto_expanded.png"} alt="open auto logo with text and icon" />
        </div>
        <div className={classes.contactInfo}>
          <div>
            <span>
              <Phone size={"1rem"} />
            </span>
            <span>+769 586 4558</span>
          </div>
          <div>
            <span>
              <Mail size={"1rem"} />
            </span>
            <span>service@openauto.ca</span>
          </div>
        </div>
      </div>

      <div className={classes.links}>
        <div>Open Auto @ all rights reserved</div>
        <div className={classes.privacyLinks}>
          <div>Privacy Policy</div>
          <div>Terms of use</div>
          <div>Cookie policy</div>
        </div>
        <div>
          <BrandFacebook size={"1.2rem"} />
          <BrandTwitter size={"1.2rem"} />
          <BrandYoutube size={"1.2rem"} />
          <BrandLinkedin size={"1.2rem"} />
          <BrandInstagram size={"1.2rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
