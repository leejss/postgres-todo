"use client";

import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
export const AddTodoDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="solid" color="indigo">
          Add Todo
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Add Todo</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Write your todo here.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Content
            </Text>
            <TextField.Input defaultValue="" placeholder="" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
