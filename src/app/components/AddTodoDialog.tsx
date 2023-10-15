"use client";

import { useAddTodoMutation } from "@/app/hooks/server/useTodos";
import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Text,
  TextFieldInput,
} from "@radix-ui/themes";
import { useState } from "react";
export const AddTodoDialog = () => {
  const [content, setContent] = useState("");
  const { mutate } = useAddTodoMutation();
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button
          style={{
            position: "fixed",
            top: 16,
            right: 16,
          }}
          variant="solid"
          color="indigo"
        >
          Add Todo
        </Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogDescription size="2" mb="4">
          Write your todo here.
        </DialogDescription>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate({
              content,
            });
            setContent("");
          }}
        >
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Content
              </Text>
              <TextFieldInput
                placeholder=""
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose>
              <Button type="submit">Save</Button>
            </DialogClose>
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};
