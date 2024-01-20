import { ReactNode } from "react";

export type ScrollWrapperType = {
  title: string;
  showMore: boolean;
  moreLink: string;
  linkParams?: Record<string, any> | undefined; // Update the type for linkParams
  children?: ReactNode;
};
