import { JSX } from "react";

export interface MenuItem {
    title: string;
    path?: string;
    icon?: JSX.Element;
    children?: MenuItem[];
  }
