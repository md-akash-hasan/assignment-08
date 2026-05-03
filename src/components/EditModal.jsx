"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

import { FaUserEdit } from "react-icons/fa";

export default function EditModal() {
  const route = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    await authClient.updateUser({
      ...userData,
    });
    if (userData) {
      route.push("/profile");
    }
  };

  return (
    <Modal>
      <Button variant="outline">Edit Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground m-auto">
                <FaUserEdit />
              </Modal.Icon>
              <Modal.Heading>Edit Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    isRequired
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField
                    isRequired
                    className="w-full"
                    name="image"
                    type="text"
                  >
                    <Label>Image Url</Label>
                    <Input placeholder="https://i.ibb.co.com/Q3RxWGdL/Screenshot-2026-05-02-233125.png" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit">
                      Edit Confam
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
