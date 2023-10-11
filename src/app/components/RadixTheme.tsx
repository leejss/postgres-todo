"use client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { type PropsWithChildren } from "react";

export const RadixTheme = ({ children }: PropsWithChildren) => {
  return <Theme>{children}</Theme>;
};
