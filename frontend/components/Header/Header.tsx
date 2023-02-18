import { Button, Image } from "@mantine/core";
import { Mail, Phone } from "tabler-icons-react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.root}>
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
        <div>
          <Button variant={"outline"} radius={"xl"} size={"md"}>
            Download the mobile app
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
