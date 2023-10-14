"use client";

import { addTodo } from "@/app/api/todos";
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
export const AddTodoDialog = async () => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button variant="solid" color="indigo">
          Add Todo
        </Button>
      </DialogTrigger>

      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogDescription size="2" mb="4">
          Write your todo here.
        </DialogDescription>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Content
            </Text>
            <TextFieldInput defaultValue="" placeholder="" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <DialogClose>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Button
              onClick={async () => {
                const todos = await addTodo({
                  id: "4",
                  completed: false,
                  content: "Study hard",
                });
              }}
            >
              Save
            </Button>
          </DialogClose>
        </Flex>
      </DialogContent>
    </DialogRoot>
  );
};
