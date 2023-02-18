import { AspectRatio, Button, Image } from "@mantine/core";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";
import SignUpForm from "../SignUpForm/SignUpForm";
import classes from "./HomePage.module.scss";

const PICKUP_IMAGE_ASPECT = 2193 / 1648;
const PICKUP_SERVICE_IMAGE_ASPECT = 2480 / 2390;

const PickupServiceImage = () => {
  return (
    <AspectRatio ratio={PICKUP_SERVICE_IMAGE_ASPECT} className={classes.pickupServiceImageContainer}>
      <Image src={"/assets/images/pickup_service.png"} alt={"pickup being booked by customer"} />
    </AspectRatio>
  );
};

const PickupImage = () => {
  return (
    <AspectRatio ratio={PICKUP_IMAGE_ASPECT}>
      <Image src={"/assets/images/pickup_Illustration.png"} alt={"pickup by open auto"} />
    </AspectRatio>
  );
};

const PickupContent = () => {
  return (
    <div className={classes.pickupContentContainer}>
      <h1>Vehicle Maintenance From The Comfort of Your Home</h1>
      <div>Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry free.</div>
      <SignUpForm />
    </div>
  );
};

const PickupServiceContent = () => {
  return (
    <div className={classes.pickupServiceContentContainer}>
      <h1>
        Focused on <br /> Time Saving
      </h1>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <Button size={"md"} radius={"xl"}>
        Download the mobile app
      </Button>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className={classes.root}>
      <div className={`${classes.dark} ${classes.header}`}>
        <Header />
      </div>
      <div className={`${classes.dark} ${classes.content}`}>
        <Section leftSection={<PickupContent />} rightSection={<PickupImage />} leftSectionFlexGrow={3} rightSectionFlexGrow={4} />
      </div>
      <div className={`${classes.bright} ${classes.content}`}>
        <Section rightSection={<PickupServiceContent />} leftSection={<PickupServiceImage />} leftSectionFlexGrow={1} rightSectionFlexGrow={1} />
      </div>
      <div className={`${classes.bright} ${classes.footer}`}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
