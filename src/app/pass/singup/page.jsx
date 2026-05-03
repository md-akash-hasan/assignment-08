"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Divider } from "@heroui/divider";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BsGoogle } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { toast } from "react-toastify";

const SingUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      ...userData,
    });
    if (!error) {
      toast.success("Register Complate");
      redirect("/pass/singin");
    } else {
      toast.error("Register Fail -> " + error.message);
    }
  };
  let hendelgoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex justify-center flex-col items-center my-10">
      <div className="shadow-lg p-8 rounded-3xl ">
        <Form
          className="flex w-96 flex-col gap-4  rounded-xl "
          onSubmit={onSubmit}
        >
          <h2 className="text-2xl font-bold mb-2">Create Account</h2>

          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image">
            <Label>Image Url</Label>
            <Input placeholder="https://example.com/image.jpg" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email address" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Password must contain at least one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2 mt-4">
            {/* Submit Button with Hover Effect */}
            <Button
              type="submit"
              color="primary"
              className="flex-1 hover:scale-105 transition-transform duration-200"
            >
              <Check />
              Register
            </Button>

            {/* Reset Button with Hover Effect */}
            <Button
              type="reset"
              variant="flat"
              className="hover:bg-danger hover:text-white transition-all duration-300"
            >
              Reset
            </Button>
          </div>
        </Form>
        <div className="">
          <div class="divider divider-vertical">OR REGISTER WITH</div>
          <div>
            <button
              onClick={hendelgoogle}
              className="btn btn-outline w-full mb-4"
            >
              <BsGoogle /> Sing in with Goole
            </button>
          </div>

          <div className="">
            <h1 className="uppercase text-neutral-400 text-[12px] text-center">
              Already have an acount?{" "}
              <Link href="/pass/singin" className=" underline text-green-500">
                Log in here
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUpPage;
