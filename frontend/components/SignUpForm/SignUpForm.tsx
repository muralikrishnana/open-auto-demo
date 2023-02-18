import { Button, Group, Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value?.trim().length > 4 ? null : "Invalid name"),
    },
  });

  return (
    <div className={classes.root}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Input size={"md"} radius={"xl"} placeholder="Enter Your Name" {...form.getInputProps("name")} />
        <br />
        <Input size={"md"} radius={"xl"} placeholder="Enter Your Email" {...form.getInputProps("email")} />

        <Group position="right" mt="md">
          <Button fullWidth radius={"xl"} size={"md"} type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default SignUpForm;
