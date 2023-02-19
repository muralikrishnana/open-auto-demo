import { Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import axios from "axios";
import { useCallback, useState } from "react";
import { Check, ExclamationMark } from "tabler-icons-react";
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

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const onSubmit = useCallback(async (userData: IUser) => {
    const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

    if (!API_ENDPOINT?.trim()) {
      console.log("API Endpoint not specified");

      return;
    }

    setSubmitButtonDisabled(true);

    const notificationId = String(Math.ceil(Math.random() * 10000));

    showNotification({
      id: notificationId,

      title: "Trying to Sign Up",
      message: "Signing you up in the system!",

      loading: true,
      disallowClose: true,
    });

    try {
      const result = await axios.post<ISuccessBasedReturn<IUser>>(API_ENDPOINT + "/auth/signup", userData);

      if (result.data.success) {
        updateNotification({
          id: notificationId,
          color: "teal",
          title: "Submission successful 👍",
          message: "Your details are submitted successfully!",
          icon: <Check size={16} />,
          autoClose: 2000,
        });
      } else {
        updateNotification({
          id: notificationId,
          color: "red",
          title: "Couldn't submit 😔",
          message: "You have already submitted once",
          icon: <ExclamationMark size={16} />,
          autoClose: 2000,
        });
      }
    } catch (err) {
      updateNotification({
        id: notificationId,
        color: "red",
        title: "Couldn't submit 😔",
        message: "Some error occurred while trying to submit your details",
        icon: <ExclamationMark size={16} />,
        autoClose: 2000,
      });
    }

    setSubmitButtonDisabled(false);
  }, []);

  return (
    <div className={classes.root}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput size={"md"} radius={"xl"} placeholder="Enter Your Name" {...form.getInputProps("name")} />
        <TextInput mt={"sm"} size={"md"} radius={"xl"} placeholder="Enter Your Email" {...form.getInputProps("email")} />

        <Group position="right" mt="md">
          <Button fullWidth radius={"xl"} size={"md"} type="submit" disabled={submitButtonDisabled}>
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default SignUpForm;
