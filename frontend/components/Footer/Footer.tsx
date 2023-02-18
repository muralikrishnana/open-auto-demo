import { Divider, Image } from "@mantine/core";
import { Mail, Phone } from "tabler-icons-react";
import SocialLinks from "../SocialLinks/SocialLinks";
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
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
